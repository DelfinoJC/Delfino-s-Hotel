import { Crypto } from "../provider/cryptograph";
import { seedAdm } from "../configs/seedConfig";
import { AdminModel } from "../models/AdminModel";

const crypto = new Crypto();

async function run() {
  const adm = {
    email: seedAdm.admEmail,
    password: await crypto.cryptoPassword(seedAdm.admPassword),
    isAdm: true,
  };

  const add = await AdminModel.create(adm);

  console.log(add);
}

run();
