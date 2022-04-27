import './index.scss'
import {Link, NavLink} from "react-router-dom";
import LogoS from '../../assets/images/portfolio_logo-a.png'
import LogoSubtitle from '../../assets/images/portfolio_log_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>

        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="">
                    <FontAwesomeIcon icon={faLinkedin} color="4dd4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="">
                    <FontAwesomeIcon icon={faGithub} color="4dd4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="">
                    <FontAwesomeIcon icon={faYoutube} color="4dd4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="">
                    <FontAwesomeIcon icon={faTwitter} color="4dd4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar