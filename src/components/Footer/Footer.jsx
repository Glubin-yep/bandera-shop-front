import facebook from './facebook.png'
import instagram from './instagram.png'
import telegram from './telegram.png'
import youtube from './youtube.png'

function Footer() {
    return(
        <footer className="footer">
            <div className="icons">
                <a href="https://www.youtube.com/"><img src={youtube} className="icon" alt=""/></a>
                <a href="https://www.instagram.com/"><img src={telegram} className="icon" alt=""/></a>
                <a href="https://www.facebook.com/"><img src={facebook} className="icon" alt=""/></a>
                <a href="https://web.telegram.org/k/"><img src={instagram} className="icon" alt=""/></a>
            </div>
            <div className="copyright">
                <span className="copyright--text">© 2023 Bandera Shop</span>
            </div>
        </footer>
    )
}

export default Footer;