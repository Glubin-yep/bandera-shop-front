import facebook from './facebook.png'
import instagram from './instagram.png'
import telegram from './telegram.png'
import youtube from './youtube.png'

function Footer() {
    return(
        <div className="footer">
            <div className="icons">
                <img src={youtube} className="icon" alt=""/>
                <img src={telegram} className="icon" alt=""/>
                <img src={facebook} className="icon" alt=""/>
                <img src={instagram} className="icon" alt=""/>
            </div>
            <div className="copyright">
                <span className="copyright--text">© 2023 Bandera Shop</span>
            </div>
        </div>
    )
}

export default Footer;