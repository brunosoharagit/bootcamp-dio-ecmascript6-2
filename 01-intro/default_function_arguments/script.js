function randomNumber() {
    console.log('Gerando um numero aleatório. . .')
    return Math.random() * 10
}

function mul(a, b = randomNumber()){
    return a * b
}

console.log(mul(5))