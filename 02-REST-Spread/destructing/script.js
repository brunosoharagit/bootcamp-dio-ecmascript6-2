var arr = ['Maçã', 'Laranja', 'Amora', ['Tomato']];
var [apple, orange, amora, [tomato]] = ['Maçã', 'Laranja', 'Amora', ['Tomate']]
console.log(tomato)
var [apple2] = arr

var obj = 
{
    name: 'Bruno'
}
var { name } = obj
console.log(name)

var user = 
{
    name: 'bruno',
    age: 23,
    props:
    {
        favColors: ['black', 'red', 'yellow']
    }
}

var age = user.props.favColors
var 
{
    props: {age: age2, favColors: [color1, color2]}
} = user

console.log(color1)

function sum(arr)
{
    return a + b
}

console.log(sum({a: 5, b: 6}))