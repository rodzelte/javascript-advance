function dog (name, age, eyeColor, breed) {
    this.name = name
    this.age = age
    this.eyeColor = eyeColor
    this.breed = breed
    this.bark = function () {
        console.log('Woof!')
    }
}

const b = new dog('Rex', 4, 'brown', 'Golden Retriever')
const b1 = new dog('Maria', 4, 'brown', 'Golden Retriever')


for(const key in b) {
    console.log( b[key] );
}

