import { Link } from "react-router-dom";


const EammuImmigrationServices = () => {
    return (
        <div>

          <div>
            {/* Header Section */}
            <div className="flex items-center">
  <div className="flex-1">
   <Link> <a className="text-2xl font-bold">Eammu Immigration Services</a></Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    {/* Profile Section */}
    <div className="dropdown dropdown-end hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className=" mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
            </div>
{/* Our Services */}
            {/* Carosul */}
            {/* <!-- Carousel list --> */}
            <div className="carousel w-full min-h-[80vh] my-6">
        {/* <!-- Slide one --> */}
        <div id="slide1" className="carousel-item relative w-full">
          
          {/* <!-- Background text and button section --> */}

          <div className="hero rounded-lg " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl  font-bold">Student Visa Services</h1>
                <p className="mb-5">We supply highly quality organic products</p>
                <button className="bg-fruit-color px-4 py-3 rounded-lg">Shop Now</button>
              </div>
            </div>
          </div>
          
          {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a href="#slide4" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide2" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
          </div>
        </div> 

        {/* <!-- Slide 2 --> */}
        <div id="slide2" className="carousel-item relative w-full">


           {/* <!-- Background text and button section --> */}

           <div className="hero rounded-lg " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Tourist Visa Services</h1>
                <p className="mb-5">We supply highly quality organic products</p>
                <button className="bg-fruit-color px-4 py-3 rounded-lg">Shop Now</button>
              </div>
            </div>
          </div>

           {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide3" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
          </div>
        </div> 

        {/* <!-- Slide 3 --> */}
        <div id="slide3" className="carousel-item relative w-full">

          {/* <!-- Background text and button section --> */}

          <div className="hero rounded-lg " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Work Visa Services</h1>
                <p className="mb-5">We supply highly quality organic products</p>
                <button className="bg-fruit-color px-4 py-3 rounded-lg">Shop Now</button>
              </div>
            </div>
          </div>

           {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide4" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
          </div>
        </div> 

        {/* <!-- Slide 4 --> */}
        <div id="slide4" className="carousel-item relative w-full">

         {/* <!-- Background text and button section --> */}

         <div className="hero rounded-lg lg:min-h-[500px] " style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
          <div className="hero-overlay rounded-lg bg-opacity-30"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-5 text-5xl font-bold">All Kinds Of Immigration Services</h1>
              <p className="mb-5">We supply highly quality organic products</p>
              <button className="bg-fruit-color px-4 py-3 rounded-lg">Shop Now</button>
            </div>
          </div>
        </div>

          {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide1" className="bg-fruit-color w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
          </div>
        </div>
      
      </div>

          </div>


            

        </div>
    );
};

export default EammuImmigrationServices;