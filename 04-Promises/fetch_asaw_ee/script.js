fetch('/fetch_asaw_ee/index.html')
.then(responseStream => {
    console.log(responseStream)
    return responseStream.json().then(data => {
        if (responseStream.status === 200){
            console.log(data)
        } else {
            throw new ErrorEvent('Request error...')
        }
    })
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log("Erro", err)
    })
})


//