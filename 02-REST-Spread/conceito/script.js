//rest operator ...
function sum(...args)
{
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 2, 3, 3))


const mul = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum2 = (a, b, ...rest) => {
    return mul.apply(...rest)
}

console.log(5, 5, 2, 3, 3)

//spread operator
const string = 'Digite alguma coisa'

const logArgs(...args)
{
    console.log(args)
}

logArgs(...str)