function* hello()
{
    console.log('Hello')
    yield

    console.log('From')
    const value = yield 2

    console.log(value)
}

const it = hello()

console.log(it.next())
console.log(it.next())
console.log(it.next('Outside!'))

function* naturalNumbers()
{
    let number = 0
    while(true)
    {
        yield number
        number++
    }
}

const n = naturalNumbers()

console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())

const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One'

const obj2 = {
    value: [1, 2, 3, 4],
    *[Symbol.iterator]()
    {
        for (var i = 0; i< this.value.length; i++)
        {
            yield this.value[i]
        }
    }
}

for (let value of obj2)
{
    console.log(value)
}