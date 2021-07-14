import { blake2AsHex } from '@polkadot/util-crypto';
import { Keyring } from '@polkadot/keyring';
import { u8aToHex, hexToU8a } from '@polkadot/util';
import * as openpgp from 'openpgp';

import { publicKey } from '../../../data/pages/founding-members';

const encryptData = async (jsonFile, membershipHandle, password, textFile, profile, keybaseHandle) => {
  const parsedJson = JSON.parse(jsonFile);

  const keyring = new Keyring({ type: parsedJson.encoding.content[1] });
  keyring.addFromJson(parsedJson);

  const user = keyring.getPair(parsedJson.address);
  user.decodePkcs8(password);

  const hash = blake2AsHex(textFile.data.replace(/\n|\r/g, ''), 256);

  const signature = user.sign(hexToU8a(hash));

  const { data: encrypted } = await openpgp.encrypt({
    message: openpgp.message.fromText(
      JSON.stringify({
        membershipHandle,
        rootAccount: profile.controller_account.toString(),
        keybaseHandle,
        textFile,
        signature: u8aToHex(signature).toString(),
      })
    ),
    publicKeys: (await openpgp.key.readArmored(publicKey)).keys,
  });

  return encrypted;
};

export default encryptData;
