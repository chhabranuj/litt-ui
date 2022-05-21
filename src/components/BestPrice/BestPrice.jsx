import './BestPrice.css';
import wazirx from '../../assets/images/wazirx.png'
import { useEffect, useState } from 'react';

const BestPrice = (props) => {
    const [bestCryptoData, setBestCryptoData] = useState(props.bestCrypto);

    useEffect(() => {
        setBestCryptoData(props.bestCrypto)
    })

    const navigateToWazirx = () => {
        window.open('https://finstreet.in/', '_blank');
    }

    return (
        <>
            {
                bestCryptoData && <div className='bestPriceParent'>
                    <p className='priceTitle'>Best Price to Trade</p>
                    <div className='bestPriceChild'>
                        <div className='bestPriceDetails'>
                            <p className='rate'>₹ {bestCryptoData.low}</p>
                            <p className='value'>Low</p>
                        </div>
                        <div className='bestPriceDetails'>
                            <p className='rate'>₹ {bestCryptoData.high}</p>
                            <p className='value'>High</p>
                        </div>
                        <div className='bestPriceMainDetails'>
                            <p className='mainRate'>₹ {bestCryptoData.open}</p>
                            <p className='value'>Average net price including commission</p>
                        </div>
                        <div className='bestPriceDetails'>
                            <p className='rate'>₹ {bestCryptoData.buy}</p>
                            <p className='value'>Buy</p>
                        </div>
                        <div className='bestPriceDetails'>
                            <p className='rate'>₹ {bestCryptoData.sell}</p>
                            <p className='value'>Sell</p>
                        </div>
                    </div>
                    <img className='wazirx' src={wazirx} onClick={navigateToWazirx}/>
                </div>
            }
        </>
    );
}

export default BestPrice;