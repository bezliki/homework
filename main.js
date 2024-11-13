//first
console.log('The fisrt')
function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let key in obj) {
            if (key in result) {
                result[key] += obj[key];
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB));
console.log('')



//second
console.log('The second')


function Character(name, opness) {
    this.name = name;
    this.opness = opness;

    this.attack = function () {
        return this.opness + ~~(Math.random() * 20) + 1;
    };
}


var balthazaar = new Character('Balthazaar', 20);
console.log(balthazaar.attack());

balthazaar.opness++;
console.log(balthazaar.attack());
console.log('')


//third
console.log('The third')
function cake(ingredient, amount) {
    const recipe = {
        'caster sugar': 160,
        'butter': 170,
        'eggs': 3,
        'self-raising flour': 115,
        'cocoa powder': 55
    };

    const ratio = amount / recipe[ingredient];
    const newRecipe = {};

    for (let newIngredient in recipe) {
        if (newIngredient === ingredient) {
            newRecipe[newIngredient] = newIngredient === 'eggs' ? amount : `${amount}g`;
        } else {
            const newAmount = (recipe[newIngredient] * ratio).toFixed(1);
            newRecipe[newIngredient] = newIngredient === 'eggs' ? +newAmount : `${newAmount}g`;
        }
    }

    return newRecipe
}

console.log(cake('butter', 55))
console.log(cake('cocoa powder', 100.5))
console.log('')


//foutrh
console.log('The foutrh')
function depth(obj) {
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return 0;

    for (let key in obj) {
        return 1
    }
    return 0

    let maxDepth = 0

    for (let key in obj) {
        maxDepth = Math.max(maxDepth, depth(obj[key]));
    }
    return maxDepth + 1
}

console.log(depth({}));
console.log(depth({ a: 1 }));
console.log(depth({ a: 1, b: { c: 2 } }));
console.log('')



console.log('task 2\n')

console.log('first')
console.log('Dependency Inversion Principle\n')

//task 2
//first
//Dependency Inversion Principle
class EmailService {
    sendMessage(message) {
        console.log(`Отправка email с сообщением: ${message}`);
    }
}

class Notification {
    constructor(messageSender) {
        this.messageSender = messageSender;
    }

    notify(message) {
        this.messageSender.sendMessage(message);
    }
}


const emailService = new EmailService();
const notification = new Notification(emailService);
notification.notify("Важное сообщение\n");




//second
//Liskov Substitution Principle
console.log('second')
console.log('Liskov Substitution Principle\n')


class Bird {
    constructor(name) {
        this.name = name;
    }
}


class FlyingBird extends Bird {
    fly() {
        console.log(`${this.name} летит`);
    }
}


class NonFlyingBird extends Bird {
    fly() {
        console.log(`${this.name} не умеет летать`);
    }
}


class Duck extends FlyingBird {
    constructor() {
        super("Утка");
    }
}


class Penguin extends NonFlyingBird {
    constructor() {
        super("Пингвин");
    }
}

const birds = [new Duck(), new Penguin()];
birds.forEach(bird => {
    bird.fly(); 
});


//third
//Single Responsibility Principle 
console.log('third')
console.log('Single Responsibility Principle\n')


class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
 
    getName() {
        return this.name;
    }
 }
 
 class UserSave { 
    save(user) {
       console.log(`Сохранение пользователя ${user.getName()} в базу данных`);
    }
 }
 

 const user = new User("Алексей", 30);
 const userSave = new UserSave();
 userSave.save(user);
 

