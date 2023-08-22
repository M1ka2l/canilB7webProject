import { Router, Request, Response} from "express"

export const all = (req: Request, res: Response) => {
    res.render('pages/view', {
        menu: {
            all: true,
            dogs: false,
            cats: false,
            fishes: false
        }
    })
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/view', {
        menu: {
            all: false,
            dogs: true,
            cats: false,
            fishes: false
        }
    })
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/view', {
        menu: {
            all: false,
            dogs: false,
            cats: true,
            fishes: false
        }
    })
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/view', {
        menu: {
            all: false,
            dogs: false,
            cats: false,
            fishes: true
        }
    })
}
