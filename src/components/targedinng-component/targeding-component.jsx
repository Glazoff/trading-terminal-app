import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TimeComponent from '../time-component/time-component.jsx';
import ModuleComponentBuy from '../module-component/module-component-buy.jsx';
import ModuleComponentSell from '../module-component/module-component-sell';

import {randomСourses} from '../../utils/utils.js'

function TargedingComponent () {
    const courses = useSelector(state => state.courses);

    const [moduleBuy, openModuleBuy] = useState(false);
    const [moduleSell, openModuleSell] = useState(false);
    const [priceBuy, setPriceBuy] = useState(courses.UsdCadBuy)
    const [priceSell, setPriceSell] = useState(courses.UsdCadSell)

    const dispatch = useDispatch();
    const currency = useRef(null);
    

    function selectedCurrency () {
        const currentCurrenc = currency.current.value;
        switch (currentCurrenc) {
            case 'USD/CAD_TOM':
                setPriceBuy(courses.UsdCadBuy);
                setPriceSell(courses.UsdCadSell);
            break;
            case 'CAD/USD_TOM':
                setPriceBuy(courses.CadUsdBuy);
                setPriceSell(courses.CadUsdSell);
            break;
            case 'USD/RUB_TOM':
                setPriceBuy(courses.UsdRubBuy);
                setPriceSell(courses.UsdRubSell);
            break;
            case 'RUB/USD_TOM':
                setPriceBuy(courses.RubUsdBuy);
                setPriceSell(courses.RubUsdSell);
            break;
            case 'USD/GBR_TOM':
                setPriceBuy(courses.UsdGbrBuy);
                setPriceSell(courses.UsdGbrSell);
            break;
            case 'GBR/USD_TOM':
                setPriceBuy(courses.GbrUsdBuy);
                setPriceSell(courses.GbrUsdSell);
            break;
            default:
                break;
        }
    };

    function closeModule () {
        openModuleBuy(false);
        openModuleSell(false);
    }

    useEffect(() => {
        const coursNow = randomСourses();
        selectedCurrency();
    
        const timeout = setInterval(() => {
            dispatch({type: 'SET_COURS', courses: coursNow})
        }, 10000);

        return () => clearInterval(timeout);
    })


    return (
        <div className="block-targeding">
            <TimeComponent/>

            <select 
                className="currency-option" 
                name="currency-option"
                onChange={selectedCurrency}
                ref={currency}
                defaultValue={"USD/CAD_TOM"}
            >
                <option value="USD/CAD_TOM">USD/CAD TOM</option>
                <option value="CAD/USD_TOM">CAD/USD TOM</option>
                <option value="USD/RUB_TOM">USD/RUB TOM</option>
                <option value="RUB/USD_TOM">RUB/USD TOM</option>
                <option value="USD/GBR_TOM">USD/GBR TOM</option>
                <option value="GBR/USD_TOM">GBR/USD TOM</option>
            </select>
                
            <div className="block-buy-sell">
                <div className="block-buy" onClick={openModuleBuy}>
                    <span className="name-deal" >Buy</span>
                    <span className="price-buy">{priceBuy}</span>
                </div>
                <div className="block-sell" onClick={openModuleSell}>                  
                    <span className="name-deal" >Sell</span>
                    <span className="price-sell">{priceSell}</span>
                </div>
            </div>
            {moduleBuy ? 
                <ModuleComponentBuy 
                    price={priceBuy} 
                    dealCurrency={currency.current.value}
                    claerModule={closeModule}
                />:            
            ''}  
            {moduleSell ? 
                <ModuleComponentSell
                    price={priceSell} 
                    dealCurrency={currency.current.value}
                    claerModule={closeModule}
                />: 
            ''}  
        </div>      
    );
}

export default TargedingComponent;