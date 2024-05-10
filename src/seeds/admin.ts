import { IAdm } from '../entities/IAdm'
import { seedAdm } from '../configs/seedConfig'
import { AdminModel } from '../models/AdminModel'
import { Crypto } from '../provider/cryptograph'

const crypto = new Crypto()

async function run() {

    const adm: IAdm = {
        email: seedAdm.admEmail,
        password: await crypto.cryptoPassword(seedAdm.admPassword),
        isAdm: true
    }

    const add = await AdminModel.create(adm)

    console.log(add)
}

run()