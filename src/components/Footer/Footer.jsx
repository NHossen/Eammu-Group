
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=''>
           <footer className="footer">
  <nav className='text-[#696969] font-light text-[18px] '>
    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Eammu Group Websites</header> 
    <Link className='mb-[6px]' to='/'><a className="link link-hover hover:text-[#081f08] ">Eammu</a></Link>
    <Link className='mb-[6px]' to='/eammuimmigrationservices'><a className="link link-hover hover:text-[#081f08] ">Eammu Immigration Services</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Eammu IT & Marketing Solutions</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Eammu Event Management</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Eammu Dairy & Poultry Farm</a></Link>
    <Link className='mb-[6px]' to='/eammufashion'><a className="link link-hover hover:text-[#081f08] ">Eammu Fashion</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Eammu Textile & Industry</a></Link>
  
  </nav> 
  <nav className='text-[#696969] font-light text-[18px] ' >
    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Eammu Useful Links</header> 
    <Link className='mb-[6px]' to='/eammunewsfeeds'><a className="link link-hover hover:text-[#081f08]  ">Eammu Newsfeeds</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Eammu Recent Projects</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Our Leading Team</a></Link>
    <Link className='mb-[6px]' to='/eammucareers'><a className="link link-hover hover:text-[#081f08] ">Careers</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Terms of use & Privacy policy </a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Why Choice Us</a></Link>
  </nav> 
  <nav className='text-[#696969] font-light text-[18px] '>
    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Eammu Social Media</header> 
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08]  ">Facebook</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Twitter</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Linkdln</a></Link>
    <Link className='mb-[6px]' to='/about'><a className="link link-hover hover:text-[#081f08] ">Instagram</a></Link>
  </nav> 
  <form>
    <header className="text-2xl text-[#4b4b4b] font-bold mb-2">Newsletter</header> 
    <fieldset className="form-control lg:w-80">
      <label className="label">
        <span className="label-text text-[#696969] font-light text-[18px] mb-2 ">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="info@eammu.com" className="input input-bordered join-item" /> 
        <button className="btn bg-[#081f08] text-white hover:text-black join-item">Subscribe</button>
       
      </div>
      <div className=" gap-3 mt-3"> 
        <Link to='/login'><h3 className="text-lg bg-[#072504] text-[#ffffff] hover:bg-white hover:text-[#072504] hover:shadow-md hover:border-[1.5px] hover:border-[#072504]  btn ">Log in</h3> </Link>
        <Link to='/signup'><h3 className="btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Sign Up</h3> </Link>
      </div>
    </fieldset>
  </form>

  
</footer>
<div className="lg:flex justify-around items-center text-center my-16 ">
                <p>@Copyright 2024 <a className='text-[#081f08] hover:text-[gray] font-bold' href="https://eammu.com/">Eammu</a>, All rights reserved.</p>
                <h1 className='text-[#081f08] lg:text-[26px] text-[20px] lg:mt-0 mt-2'  >Something New..!</h1>
            </div>
        </div>
    );
};

export default Footer;