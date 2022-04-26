import './index.scss'
import {Link} from "react-router-dom";
import LogoS from '../../assets/images/portfolio_logo-a.png'
import LogoSubtitle from '../../assets/images/portfolio_log_sub.png'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
        </Link>
    </div>
)

export default Sidebar