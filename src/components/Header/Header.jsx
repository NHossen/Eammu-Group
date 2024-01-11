
import { Link } from 'react-router-dom';
import logo from '../../assets/Eammu_logo.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center mx-4 p-4'>
                <img className='w-[220px]' src={logo} alt="Eammu_Logo" />
                <nav>
                    
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                 
                </nav>
            </div>
             
             
        </div>
    );
};

export default Header;