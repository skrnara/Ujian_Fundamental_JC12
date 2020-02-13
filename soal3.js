//recehan ada 25, 10, 5, 1
cekkoin=(coin)=>{
    recehan25=Math.floor(coin/25)
    recehan10=Math.floor((coin-(recehan25*25))/10)
    recehan5=Math.floor((coin-(recehan25*25)-(recehan10*10))/5)
    recehan1=Math.floor((coin-(recehan25*25)-(recehan10*10)-(recehan5*5))/1)

    return jumlahRecehan=recehan25+recehan10+recehan5+recehan1
}

console.log(cekkoin(49))
console.log(cekkoin(31))
console.log(cekkoin(50))
console.log(cekkoin(125))
console.log(cekkoin(226))
console.log(cekkoin(5))
console.log(cekkoin(25))