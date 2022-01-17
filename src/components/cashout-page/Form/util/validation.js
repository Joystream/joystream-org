import { decodeAddress } from '@polkadot/util-crypto';
import { isCashAddress, isLegacyAddress, isP2SHAddress, isValidAddress } from 'bchaddrjs';

export const isValidJoystreamAddress = address => {
  try {
    decodeAddress(address);
    return true;
  } catch (error) {
    return false;
  }
};

export const isValidTokenAmount = value => {
  return !isNaN(parseFloat(value));
};

export const validateBchAddress = bchAddress => {
  if (!isValidAddress(bchAddress)) {
    return null;
  }

  if (isCashAddress(bchAddress)) {
    return { warning: null };
  }

  if (isLegacyAddress(bchAddress)) {
    return { warning: 'This is a legacy address. Make sure to avoid mixing BCH/BTC up!' };
  }

  if (isP2SHAddress(bchAddress)) {
    return { warning: 'This is very likely a BTC address. Make sure to avoid mixing BCH/BTC up !' };
  }

  return null;
};

export const isValidEmail = email => {
  return email.match(/^[^@\s]+@[^@\s]+\.[^@\.\s]+$/g);
};

export const validateUser = async (api, membershipHandle, joystreamAddress) => {
  const id = await api.query.members.memberIdByHandle(membershipHandle);

  if (id.isEmpty) {
    return { error: 'No such account exists. Please try again' };
  }

  const membership = await api.query.members.membershipById(id);

  if (membership.controller_account.toString() !== joystreamAddress) {
    return { error: "The address you've provided does not belong to this account." };
  }

  return { error: null };
};
