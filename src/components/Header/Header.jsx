
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Eammu_logo.png'

const Header = () => {
    return (
        <div >
          {/* Top Nab */}
          <div className='w-full  h-12 bg-[#052405]'>

          </div>
     
           



<div className='p-3 container mx-auto'>
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {/* Mobile */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
            {/* Mobile Version */}
          <a>Parent</a>
          <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
  <li>
    <a>Solutions</a>
    <ul>
      <li><a>Design</a></li>
      <li><a>Development</a></li>
      <li><a>Hosting</a></li>
      <li><a>Domain register</a></li>
    </ul>
  </li>
  <li>
    <a>Enterprise</a>
    <ul>
      <li><a>CRM software</a></li>
      <li><a>Marketing management</a></li>
      <li><a>Security</a></li>
      <li><a>Consulting</a></li>
    </ul>
  </li>
  <li>
    <a>Products</a>
    <ul>
      <li><a>UI Kit</a></li>
      <li><a>Wordpress themes</a></li>
      <li><a>Wordpress plugins</a></li>
      <li>
        <a>Open source</a>
        <ul>
          <li><a>Auth management system</a></li>
          <li><a>VScode theme</a></li>
          <li><a>Color picker app</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <a>Company</a>
    <ul>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li><a>Privacy policy</a></li>
      <li><a>Press kit</a></li>
    </ul>
  </li>
</ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>

    </div>
    {/* Eammu Logo */}
   <a href="https://eammu.com/"> <img className='w-[220px]' src={logo} alt="Eammu_Logo" /></a>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/'>Home</NavLink></li>
      <li>
        <details>
            {/* Desktop version */}
          <summary>Our Services</summary>
          <ul className=" menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
  <li>
    <a>Services</a>
    <ul>
      <li><a>Visa Services</a></li>
      <li><a>Marketing Services</a></li>
      <li><a>Event Management Services</a></li>
      <li><a>E-Commerce Services</a></li>
    </ul>
  </li>
  <li>
    <a>Visa Services</a>
    <ul>
      <li><a>Student Visa</a></li>
      <li><a>Tourist Visa</a></li>
      <li><a>Work Visa</a></li>
      <li><a>Visa Consulting</a></li>
    </ul>
  </li>
  <li>
    <a>We Are Assist</a>
    <ul>
      <li><a>USA Student Visa</a></li>
      <li><a>Europe Student Visa</a></li>
      <li><a>Canada & Austrelia Student Visa</a></li>
      <li>
        <a>Work & Tourist Visa</a>
        <ul>
          <li><a>USA</a></li>
          <li><a>Europe</a></li>
          <li><a>Canada & Others Country</a></li>
        </ul>
      </li>
    </ul>
  </li>
 
</ul>
        </details>
      </li>
      <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/about'>About Us</NavLink></li>
      <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/contact'>Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#072504] text-[#ffffff] hover:bg-white hover:text-[#072504] hover:shadow-md hover:border-2 hover:border-[#072504] ">Enroll Now</a>
  </div>
</div>

</div>


             
             
        </div>
    );
};

export default Header;