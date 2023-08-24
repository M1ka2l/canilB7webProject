type animals = '' | 'dog' | 'cat' | 'fish' | 'all'
export function animals(activeMenu: animals) {
    let boolean = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if(activeMenu !== '') {
        boolean[activeMenu] = true
    }
    return boolean
}