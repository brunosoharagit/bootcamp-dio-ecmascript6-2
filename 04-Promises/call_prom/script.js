//Promises
const doThe1stPromise = () => new Promise((resolved, rejected) => {
        setTimeout(() => {
            resolved('First data')
        }, 1000)
})

const doThe2ndPromise = () => new Promise((resolved, rejected) => {
        throw new Error('Algo deu errado no processo')
        setTimeout(() => {
            resolved('Second data')
        }, 1000);
})

Promise.all([doThe1stPromise(), doThe2ndPromise()]).then((data) => {
    console.log(data[0].split(''))
    console.log(data[1].split(''))
}).catch(err => {
    console.log(err)
})

//Callback
function doSomething(callback)
{
    setTimeout(function() {
        callback('First data')
    }, 1000)
}

function doAnotherThing(callback)
{
    setTimeout(function() {
        callback('Second data')
    }, 1000)
}

function doAll()
{
    try{
        doSomething(function(data) {
            var processedData = data.split(' ')
    
            try{
                doAnotherThing(function(data2){
                    var processedData2 = data2.split(' ')
        
                    try{
                        setTimeout(() => {
                            console.log(processedData, processedData2)
                        }, 1000);
                    }

                    catch(err){

                    }
                })
            }

            catch(err) {

            }
        })
    }

    catch(err){

    }
}

doAll()