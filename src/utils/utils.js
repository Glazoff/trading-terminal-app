function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
} 
  

function randomСourses () {
    return {
        UsdCadBuy: getRandomFloat(5, 101).toFixed(5),
        CadUsdBuy: getRandomFloat(5, 101).toFixed(5),
        UsdRubBuy: getRandomFloat(5, 101).toFixed(5),
        RubUsdBuy: getRandomFloat(5, 101).toFixed(5),
        UsdGbrBuy: getRandomFloat(5, 101).toFixed(5),
        GbrUsdBuy: getRandomFloat(5, 101).toFixed(5),
        UsdCadSell: getRandomFloat(5, 101).toFixed(5),
        CadUsdSell: getRandomFloat(5, 101).toFixed(5),
        UsdRubSell: getRandomFloat(5, 101).toFixed(5),
        RubUsdSell: getRandomFloat(5, 101).toFixed(5),
        UsdGbrSell: getRandomFloat(5, 101).toFixed(5),
        GbrUsdSell: getRandomFloat(5, 101).toFixed(5)
    }
}


export {randomСourses};