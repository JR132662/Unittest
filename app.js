const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar/1.2) * 127.9
    return valueInYen
}
const fromYenToPound = function(valueInYen){
    let ValueInPound = (valueInYen/127.9) * .8
    return ValueInPound 
}
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound }