
//abstract class
class Animal {
    constructor() {
        if (this.constructor === Animal) {
            throw new Error(`this class can only be extended.`)
        }
    }
    sound() {
        throw new Error(`cannot call method directly.`)
    }
    food() {
        throw new Error(`cannot call method directly.`)
    }
    thermoregulation() {
        throw new Error(`cannot call method directly.`)
    }
    getClassification() {
        throw new Error(`cannot call method directly.`)
    }
    phylum() {
        throw new Error(`cannot call method directly.`)
    }
    class() {
        throw new Error(`cannot call method directly.`)

    }
    order() {
        throw new Error(`cannot call method directly.`)
    }
    family() {
        throw new Error(`cannot call method directly.`)
    }
    habitat() {
        throw new Error(`cannot call method directly.`)
    }
    foodHabit() {
        throw new Error(`cannot call method directly.`)
    }
}


class Frog extends Animal {
    //private variables
    #numberOfLegs = 4
    #numberOfEyes = 2
    #subPhylum = `Vertebrata`
    constructor() {
        super()
    }
    sound() {
        return `croak`
    }
    food() {
        return `plants and insects`
    }
    thermoregulation() {
        return `cold-blooded(poikilothermic)`
    }
    class() {
        return `Amphibian`
    }
    phylum() {
        return `Chordata`
    }
    family() {
        return `Ranidae`
    }
    order() {
        return `Anura`
    }
    habitat() {
        return `small shallow pools`
    }
    foodHabit() {
        return `carnivore`
    }

    //private method
    #classification() {
        return {
            classification: {
                name: this.constructor.name,
                sound: this.sound(),
                food: this.food(),
                thermoregulation: this.thermoregulation(),
                class: this.class(),
                phylum: this.phylum(),
                subPhylum: this.#subPhylum,
                family: this.family(),
                order: this.order(),
                habitat: this.habitat(),
                foodHabit: this.foodHabit()
            }
        }
    }

    getClassification() {
        return this.#classification()
    }
    getNumberOfEyes() {
        return this.#numberOfEyes
    }
    getNumberOfLegs() {
        return this.#numberOfLegs
    }

}


class Cat extends Animal {
    //private variables
    #numberOfLegs = 4
    #numberOfEyes = 2
    #subPhylum = `Vertebrata`
    constructor() {
        super()
    }
    sound() {
        return `meow`
    }
    food() {
        return `cooked fish and other proteins`
    }
    thermoregulation() {
        return `warm-blooded(homeothermic)`
    }
    class() {
        return `Mammalia`
    }
    phylum() {
        return `Chordata`
    }
    family() {
        return `Felidae`
    }
    order() {
        return `Carnivora`
    }
    habitat() {
        return `forest, grassland and urban areas.`
    }
    foodHabit() {
        return `carnivores`
    }

    //private method
    #classification() {
        return {
            classification: {
                name: this.constructor.name,
                sound: this.sound(),
                food: this.food(),
                thermoregulation: this.thermoregulation(),
                class: this.class(),
                phylum: this.phylum(),
                subphylum: this.#subPhylum,
                family: this.family(),
                order: this.order(),
                habitat: this.habitat(),
                foodHabit: this.foodHabit()
            }
        }
    }

    getClassification() {
        return this.#classification()
    }
    getNumberOfEyes() {
        return this.#numberOfEyes
    }
    getNumberOfLegs() {
        return this.#numberOfLegs
    }
}


class Butterfly extends Animal {
    //private variables
    #numberOfLegs = 6
    #numberOfEyes = 2
    #subPhylum = `Hexapoda`

    constructor() {
        super()
    }
    sound() {
        return `click`
    }
    food() {
        return `nectar from flowers`
    }
    thermoregulation() {
        return `cold-blooded(poikilothermic)`
    }
    class() {
        return `Insecta`
    }
    phylum() {
        return `Arthropoda`
    }
    family() {
        return `Nymphalidae`
    }
    order() {
        return `Lepidoptera`
    }
    habitat() {
        return `fields, pastures and gardens`
    }
    foodHabit() {
        return `Herbivores`
    }

    //private method
    #classification() {
        return {
            classification: {
                name: this.constructor.name,
                sound: this.sound(),
                food: this.food(),
                thermoregulation: this.thermoregulation(),
                class: this.class(),
                phylum: this.phylum(),
                subphylum: this.#subPhylum,
                family: this.family(),
                order: this.order(),
                habitat: this.habitat(),
                foodHabit: this.foodHabit()
            }
        }
    }

    getClassification() {
        return this.#classification()
    }
    getNumberOfEyes() {
        return this.#numberOfEyes
    }
    getNumberOfLegs() {
        return this.#numberOfLegs
    }
}

const butterfly = new Butterfly()
const frog = new Frog()
const cat = new Cat()
console.clear()
console.log(butterfly.getClassification())
// console.log(frog.getClassification())
// console.log(cat.getClassification())
