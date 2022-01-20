import { decodeAddress } from '@polkadot/util-crypto';
import { isCashAddress, isLegacyAddress, isP2SHAddress, isValidAddress } from 'bchaddrjs';

export const validateJoystreamAddress = address => {
  try {
    decodeAddress(address);
    return null;
  } catch (error) {
    return 'Incorrect account adress. Please try again';
  }
};

export const validateTokenAmount = value => {
  if (isNaN(parseFloat(value))) {
    return 'Invalid value. Please try again';
  }

  return null;
};

export const validateBchAddress = bchAddress => {
  // Returns warning string or null depending on if there is an error or not.

  if (!isValidAddress(bchAddress)) {
    return { errorMessage: 'Incorrect account adress. Please try again' };
  }

  if (isCashAddress(bchAddress)) {
    return null;
  }

  if (isLegacyAddress(bchAddress)) {
    return { warningMessage: 'This is a legacy address. Make sure to avoid mixing BCH/BTC up!' };
  }

  if (isP2SHAddress(bchAddress)) {
    return { warningMessage: 'This is very likely a BTC address. Make sure to avoid mixing BCH/BTC up !' };
  }

  return { errorMessage: 'Incorrect account adress. Please try again' };
};

export const validateEmail = email => {
  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\.\s]+$/g)) {
    return 'Incorrect email adress. Please try again';
  }

  return null;
};

export const validateUser = async (api, membershipHandle, joystreamAddress) => {
  // Returns error string or null depending on if there is an error or not.

  const id = await api.query.members.memberIdByHandle(membershipHandle);

  if (id.isEmpty) {
    return 'No such account exists. Please try again';
  }

  const membership = await api.query.members.membershipById(id);

  if (membership.controller_account.toString() !== joystreamAddress) {
    return "The address you've provided does not belong to this account.";
  }

  return null;
};
