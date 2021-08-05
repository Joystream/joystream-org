import { blake2AsHex } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';
import { u8aToHex, hexToU8a } from '@polkadot/util';
import * as openpgp from 'openpgp';

import { publicKey } from '../../../data/pages/founding-members';

const encryptData = async (membershipHandle, profile, dataJson, membershipJson, keybaseHandle, password) => {
  const parsedJson = JSON.parse(membershipJson);

  const keyring = new Keyring({ type: parsedJson.encoding.content[1] });
  keyring.addFromJson(parsedJson);

  const user = keyring.getPair(parsedJson.address);
  user.decodePkcs8(password);

  const hash = blake2AsHex(JSON.stringify(dataJson), 256);

  const signature = user.sign(hexToU8a(hash));

  // TO BE REMOVED
  console.log(JSON.stringify({
    memberId: profile.memberId,
    membershipHandle,
    membershipControllerKey: profile.controller_account.toString(),
    keybaseHandle,
    signature: u8aToHex(signature).toString(),
    dataJson
  }))

  const { data: encrypted } = await openpgp.encrypt({
    message: openpgp.message.fromText(
      JSON.stringify({
        membershipHandle,
        rootAccount: profile.controller_account.toString(),
        keybaseHandle,
        signature: u8aToHex(signature).toString(),
        dataJson
      })
    ),
    publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
  });

  return encrypted;
};

export default encryptData;
