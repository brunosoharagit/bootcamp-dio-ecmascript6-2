//Async... Await
const asyncTimer = () =>
    new Promise((resolve, rejeect) => {
        setTimeout(() => {
            resolve(12345)
        }, 1000);
    })

const simpleFunction = async () => {
    const data = await asyncTimer()

    const dataJSON = await fetch('/data.json')
        .then(resStream => resStream.json())
    return data
}

simpleFunction()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    }) 