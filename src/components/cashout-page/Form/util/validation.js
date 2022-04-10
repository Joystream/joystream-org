import { decodeAddress, blake2AsHex } from '@polkadot/util-crypto';
import { isCashAddress, isLegacyAddress, isP2SHAddress, isValidAddress } from 'bchaddrjs';

export const validateJoystreamAddress = address => {
  try {
    decodeAddress(address);
    return null;
  } catch (error) {
    return 'cashout.form.sendFrom.incorrectAddress';
  }
};

const MIN_ALLOWED_DOLLAR_AMOUNT = 1;
const MAX_ALLOWED_DOLLAR_AMOUNT = 50;

export const validateTokenAmount = (value, joyInDollars, bchInDollars, bchBalance) => {
  const valueAsFloat = parseFloat(value);

  if (isNaN(valueAsFloat)) {
    return 'cashout.form.amount.invalidValue';
  }

  const userAmountInDollars = valueAsFloat * joyInDollars;

  if(userAmountInDollars < MIN_ALLOWED_DOLLAR_AMOUNT) {
    return `cashout.form.amount.needsToBeGreater`;
  }

  if(userAmountInDollars > MAX_ALLOWED_DOLLAR_AMOUNT) {
    return `cashout.form.amount.needsToBeLess`;
  }

  if(bchInDollars !== null && bchBalance !== null) {
    const serverBalanceInDollars = bchBalance * bchInDollars;

    if(userAmountInDollars > serverBalanceInDollars) {
      return `cashout.form.amount.notEnoughFunds`;
    }
  }

  return null;
};

export const validateBchAddress = bchAddress => {
  if (!isValidAddress(bchAddress)) {
    return { errorMessage: 'cashout.form.destinationAddress.incorrectAddress' };
  }

  if (isCashAddress(bchAddress)) {
    return null;
  }

  if (isLegacyAddress(bchAddress)) {
    return { warningMessage: 'cashout.form.destinationAddress.legacyAddress' };
  }

  if (isP2SHAddress(bchAddress)) {
    return { warningMessage: 'cashout.form.destinationAddress.btcAddress' };
  }

  return { errorMessage: 'cashout.form.destinationAddress.incorrectAddress' };
};

export const validateEmail = email => {
  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\.\s]+$/g)) {
    return 'cashout.form.email.incorrectEmailAddress';
  }

  return null;
};

export const validateUser = async (api, membershipIdentification, joystreamAddress) => {
  // First, try to parse identfication as a number. If not possible, use it as a membership handle.

  const membershipIdAsNumber = parseInt(membershipIdentification, 10);

  if(!isNaN(membershipIdAsNumber)) {
    const membership = await api.query.members.membershipById(membershipIdAsNumber);

    if (membership.controller_account.toString() !== joystreamAddress) {
      return "cashout.form.joystreamHandle.idMismatch";
    }

    return null;
  }

  const handleHash = blake2AsHex(membershipIdentification);
  const id = await api.query.members.memberIdByHandleHash(handleHash);

  if (id.isEmpty) {
    return 'cashout.form.joystreamHandle.noSuchAccount';
  }

  const membership = await api.query.members.membershipById(id);

  if (membership.controller_account.toString() !== joystreamAddress) {
    return "cashout.form.joystreamHandle.addressMismatch";
  }

  return null;
};
