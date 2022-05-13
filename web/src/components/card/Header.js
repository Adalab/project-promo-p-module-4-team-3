import Logo from "../../images/logo-awesome.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={Logo} alt='Logo' />
      </Link>
    </header>
  );
};

export default Header;
