import { Request, Response} from 'express'
import { animals } from '../help/help'
import {pet} from '../Models/pets'

export const search = (req: Request, res: Response) => {
    
    let query: string = req.query.q as string

    if(!query) {
        res.redirect('/');
        return;
    }
    let list = pet.getNameOfAnimal(query)

    res.render('pages/view', {
        menu: animals(''),
        list, 
        query
    })
    console.log(list)
}
