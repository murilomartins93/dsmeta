import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return(
        <header>
            <nav className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta Logo" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="instagram.com/murilomarttins" target="_blank">@murilomarttins</a></p>
            </nav>
        </header>
    ) 
}
  
 export default Header


