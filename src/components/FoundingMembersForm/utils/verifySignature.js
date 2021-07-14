import { naclVerify, schnorrkelVerify } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';

const verifySignature = ( profileAddress, stashAddress, signedMessage ) => {
  const keyring = new Keyring();
  const publicKey = keyring.decodeAddress(stashAddress);

  if (publicKey) {
    let isValidSr = false;
    let isValidEd = false;

    try {
      isValidEd = naclVerify(`Member ${profileAddress} owns ${stashAddress}`, signedMessage, publicKey);
    } catch (err) {
      console.log('Invalid ed25519.');
    }

    try {
      isValidSr = schnorrkelVerify(`Member ${profileAddress} owns ${stashAddress}`, signedMessage, publicKey);
    } catch (err) {
      console.log('Invalid sr25519.');
    }

    return isValidSr || isValidEd;
  }

  return false;
};

export default verifySignature;
