//Sem Arrow Functions
var sum = function(a,b)
{
    return a + b
}
console.log(sum(3, 2))

function Car()
{
    this.foo = 'bar'
}

console.log(new Car())

//Com Arrow Funtions
var sum2 = (a, b) => a + b
console.log(sum2(3, 2))

var createObj = () => ({ test: 123 })
console.log(createObj())

var log = value => console.log(value)
console.log(log('teste'))

var obj = {
    showContext: function showContext(){
        var _that = this

        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000)
    },
    log: function log(value){
        console.log(value)
    }
}

obj.showContext()