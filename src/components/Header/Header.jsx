import './Header.css';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = (props) => {
    const cryptoCurrency = ['BTC', 'XRP', 'ETH', 'TRX', 'EOS', 'ZIL', 'BAT', 'ZRX', 'REQ', 'NULS'];
    const [crypto, setCrypto] = useState('BTC');
    const [currencyMenu, setCurrencyMenu] = useState(false);
    const [cryptoMenu, setCryptoMenu] = useState(false);

    const handleCurrencyMenu = () => {
        setCurrencyMenu(currencyMenu?false:true);
        setCryptoMenu(false);
    }

    const handleCryptoMenu = () => {
        setCryptoMenu(cryptoMenu?false:true);
        setCurrencyMenu(false);
    }

    const handleSelectCrypto = (e) => {
        setCrypto(e.target.innerText);
        props.crypto(e.target.innerText.toLowerCase() + "inr");
        setCryptoMenu(false);
    }

    const navigateToWazirx = () => {
        window.open('https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn', '_blank');
    }

    const navigateToGithub =() => {
        window.open('https://github.com/chhabranuj', '_blank')
    }

    return (
        <div className='headerParent'>
            <div className='headerTitleParent'>
                <p className='headerTitle'>Litt</p>
                <p className='headerSubTitle'>Powered By <span style={{color: '#6ececf'}}>Anuj Chhabra</span></p>
            </div>
            <div className='headerButtonsParent'>
                <div className='headerButton'>
                    <div className='dropDownButton' onClick={handleCurrencyMenu}>
                        <p className='buttonTitle'>INR</p>
                        <ArrowDropDownIcon />
                    </div>
                    {currencyMenu && 
                        <div className='dropDownMenu'>
                            <p className='menuValue' onClick={() => setCurrencyMenu(false)}>INR</p>
                        </div>
                    }
                </div>
                <div className='headerButton cryptoTypeButton'>
                    <div className='dropDownButton' onClick={handleCryptoMenu}>
                        <p className='buttonTitle'>{crypto}</p>
                        <ArrowDropDownIcon />
                    </div>
                    {cryptoMenu && 
                        <div className='dropDownMenu'>
                            {cryptoCurrency.map((item, index) => <p className='menuValue' key={index} onClick={handleSelectCrypto}>{item}</p>)}
                        </div>
                    }
                </div>
                <p className='buyCrypto' onClick={navigateToWazirx}>Buy {crypto}</p>
            </div>
            <div className='telegram' onClick={navigateToGithub}>
                <GitHubIcon />&nbsp;&nbsp;
                <p className='telegramTitle'>Connect Github</p>
            </div>
        </div>
    );
}

export default Header;