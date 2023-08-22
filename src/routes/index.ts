import { Router, Request, Response} from "express"
import * as animalsControllers from '../Controllers/animalsControllers'
import * as searchControllers from '../Controllers/searchControllers'

const router = Router()

router.get('/', animalsControllers.all)

router.get('/dogs', animalsControllers.dogs)

router.get('/cats', animalsControllers.cats)

router.get('/fishes', animalsControllers.fishes)

router.get('/search', searchControllers.search)

export default router