
import { Link,NavLink } from 'react-router-dom';
import logo from '../../assets/Eammu_logo.png'

const Header = () => {
    return (
        <div className=''>
           


    <div className="lg:flex justify-between text-center p-4 my-4 ">
         <div>
            <img className='w-[220px]' src={logo} alt="Eammu_Logo" />
         </div>
            

     <div>

       <div className="p-2">
               <ul className="flex gap-4 font-medium lg:mt-0 mt-8 ">
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/ourServices'>Our Services</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/about'>About Us</NavLink></li>
                    <li><NavLink className={({ isActive,isPending})=>isPending? "pending" :isActive ? "text-green-950 underline" : ""} to='/contact'>Contact Us</NavLink></li>
                   
                </ul>
      </div>
      <div className="flex justify-center gap-3"> 
        <Link to='/login'><h3 className="text-xl font-medium text-[#ff3f3f]">Log in</h3> </Link>
        <Link to='/signup'><h3 className="text-xl font-medium">Sign Up</h3> </Link>
      </div>
     </div>
     

               
    
    </div>

    <div className="navbar bg-base-100">
      {/* Start */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          {/* Mobile Menu */}
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
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  {/* Center */}
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          {/* Desktop New Add */}
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
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  {/* End */}
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>




             
             
        </div>
    );
};

export default Header;