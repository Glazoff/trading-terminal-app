import {useRef} from "react";
import {useDispatch} from "react-redux";
import {toast} from 'react-toastify';
import {nanoid} from 'nanoid'


function ModuleComponentBuy (props) {
    const {price, dealCurrency, claerModule} = props;
    const applicationVolume = useRef(null);
    const dispatch = useDispatch();

    function meakDeal () {
        const volume = applicationVolume.current.value;

        if (volume > 0) {
            const transaction = {
                id: nanoid(),
                typeDeal: 'Buy',
                price: price,
                dealCurrency: dealCurrency,
                volume: volume,
                dateTime: new Date().toLocaleString()
            }

            dispatch({type: 'ADD_TRANS', transaction: transaction});
            toast.success('Сделка прошла успешна!')
            claerModule();
        } else {
            toast.warning('Сумма не должна быть равна 0 или меньше')
        }
    }

    return (
        <div className="module-deal">
            <h3 className="module-title">Make order</h3>
    
            <div className="block-details-deal">
                <span className="deal-type">Buy</span>
                <span className="deal-price">{price}</span>
                <span className="deal-currency">{dealCurrency}</span>
            </div>

            <div className="block-input-deal">
                <label htmlFor="volume-currency">Volume</label>
                <input type="number" id="volume-currency" ref={applicationVolume}/>
            </div>

            <div className="block-cancel-ok">
                <button onClick={() => claerModule()}>Cancel</button>
                <button onClick={meakDeal}>Ok</button>
            </div>   
        </div>
    );
}

export default ModuleComponentBuy;