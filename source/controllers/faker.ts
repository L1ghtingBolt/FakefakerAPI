/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import fakefaker from './fakefaker';

const getUser = ( req: Request, res: Response, next: NextFunction ) => {
    
    let r = []
    for (let i = 0; i < 20; i++) {
        let n = fakefaker.name();
        let sn = fakefaker.surName();
        r.push(
            {
                name: n,
                surname: sn,
                email: fakefaker.email(n, sn),
                company: fakefaker.emailCompany(),
                completeName: fakefaker.completeName(),
                city: fakefaker.city(),
                country: fakefaker.country(),
                zipcode: fakefaker.zipcode(),
                address: fakefaker.address(),
            }
        )
    }
    
    return res.status(200).json(r)
}

export default { getUser };