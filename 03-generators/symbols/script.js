const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('World')

console.log(uniqueId)
console.log(uniqueId2)

const obj = 
{
    [uniqueId]: 'Hello'
}

console.log(obj)

//=============================================================================
const array = [1, 2, 3, 4]

const it = array[Symbol.iterator]()


while (true)
{
    let {value, done} = it.next()
    console.log(value)
    if (done)
    {
        break
    }
}

//==============================================================================
const string = 'Digital Innovation One'

for (let v of string)
{
    console.log(v)
}

console.log(array[Symbol.iterator]().next())

const obj2 = 
{
    v: [1, 2, 3, 4],
    [Symbol.iterator]()
    {
        let i = 0

        return{
            next: () => {
                i++
                return{
                    value: this.v[i - 1],
                    done: i > this.v
                }
            }
        }
    }
}

const it2 = obj2[Symbol.iterator]()

console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())