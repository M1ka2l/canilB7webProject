import { Request, Response} from 'express'

export const search = (req: Request, res: Response) => {
    res.render('pages/view', {
        menu: {
            all: false,
            dogs: false,
            cats: false,
            fishes: false
        }
    })
}

