import './Footer.css';
import Divider from '@mui/material/Divider';
import algorand from '../../assets/images/algorand.jpg'

const Footer = () => {

    const navigateToAlgorand = () => {
        window.open('https://www.algorand.com/futurefi/', '_blank')
    }

    const navigateToGithub = () => {
        window.open('https://github.com/chhabranuj', '_blank')
    }

    return (
        <div className='footerParent'>
            <img className='algorand' src={algorand} onClick={navigateToAlgorand}/>
            <Divider style={{background: '#2c303e', margin: '10px 0'}} /> 
            <div className='footerContent' >
                <div className='footerImportantLinks'>
                    <p className='link'>Copyright © 2019</p>
                    <p className='link'>Hadlinfo.com</p>
                    <p className='link'>Developed By <span style={{color: '#6ececf', cursor: 'pointer'}} onClick={navigateToGithub}>Anuj Chhabra</span></p>
                </div>
                <p className='link'>Support</p>
            </div>
        </div>
    );
}

export default Footer;