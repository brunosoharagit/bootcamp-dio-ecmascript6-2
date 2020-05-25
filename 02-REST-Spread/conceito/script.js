//rest operator ...
function sum(...args)
{
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233))


const mul = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum2 = (a, b, ...c) => {
    return mul.apply(...c)
}

console.log(5, 5, 2, 3, 3)

//spread operator
const string = 'Digite alguma coisa'

const logArgs = (...args) =>
{
    console.log(args)
}

logArgs(...string)

const usuario = 
{
    nome: 'Bruno',
    idade: 23,
    endereco:
    {
        cidade: 'Campinas',
        uf: 'São Paulo',
        pais: 'Brasil'
    },
}

console.log(usuario)

const usuario2 = {...usuario, endereco: {...usuario.endereco}, nome: 'Celso'}
console.log(usuario2)

const arr = [0, 1, 2, 3, 4]

const arr2 = [...arr, 5, 6, 7, 8, 9]

const obj1 = {
    test: 'Hello'
}

const obj2 = {
    ...obj1,
    test: 'world!'
}

console.log(arr2)

console.log(obj2)
//desestruturação
const nome2 = 'Bruno'
const idade2 = 23
const cidade2 = 'Campinas'

const usuario3 = 
{
    nome2,
    idade2,
    cidade2
}

console.log(usuario3)