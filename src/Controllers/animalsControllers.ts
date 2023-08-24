import { Router, Request, Response} from "express"
import { animals } from '../help/help'
import {pet} from '../Models/pets'
export const all = (req: Request, res: Response) => {
    let list = pet.getAll()

    res.render('pages/view', {
        banner:  {
            type: 'animais',
            info: 'Animais disponíveis',
            backImage: 'allanimals.jpg'
        },
        menu: animals('all'),
        list
    })
}
export const dogs = (req: Request, res: Response) => {
    let list = pet.getTypeOfAnimal('dog')
    res.render('pages/view', {
        banner:  {
            type: 'cachorros',
            info: 'Animais disponíveis',
            backImage: 'banner_dog.jpg'
        },
        menu: animals('dog'),
        list
    })
}
export const cats = (req: Request, res: Response) => {
    let list = pet.getTypeOfAnimal('cat')
    res.render('pages/view', {
        banner:  {
            type: 'gatos',
            info: 'Animais disponíveis',
            backImage: 'banner_cat.jpg'
        },
        menu: animals('cat'),
        list
    })
}
export const fishes = (req: Request, res: Response) => {
    let list = pet.getTypeOfAnimal('fish')
    res.render('pages/view', {
        banner:  {
            type: 'peixes',
            info: 'Animais disponíveis',
            backImage: 'banner_fish.jpg'
        },
        menu: animals('fish'),
        list
    })
}
