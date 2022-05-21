import { useEffect } from 'react';
import './CryptoDetails.css';

const CryptoDetails = (props) => {

    return (
        <div className='cryptoDetailsChild'>
            <table className='cryptoDetailsTable'>
                <thead>
                    <tr className='cryptoTableTitle'>
                        <th className='cryptoTitle'>#</th>
                        <th className='cryptoTitle'>Name</th>
                        <th className='cryptoTitle'>Last</th>
                        <th className='cryptoTitle'>Buy Price</th>
                        <th className='cryptoTitle'>Sell Price</th>
                        <th className='cryptoTitle'>Volume</th>
                        <th className='cryptoTitle'>Base Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data &&
                        Object.keys(props.data).map((item, index) => <tr className='cryptoTableValue' key={index}>
                                <td className='cryptoValue'>{index+1}</td>
                                <td className='cryptoValue'>{props.data[item].name.toUpperCase()}</td>
                                <td className='cryptoValue'>{props.data[item].last}</td>
                                <td className='cryptoValue'>{props.data[item].buy}</td>
                                <td className='cryptoValue'>{props.data[item].sell}</td>
                                <td className='cryptoValue'>{props.data[item].volume}</td>
                                <td className='cryptoValue'>{props.data[item].base_unit.toUpperCase()}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CryptoDetails;