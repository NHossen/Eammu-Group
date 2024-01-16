import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div className="">
        {/* Eammu Heading Section */}
        <div className="hero min-h-[60vh] ">
  <div className="hero-content text-center">
    <div className="max-w-6xl">
      <h1 className="text-4xl font-bold">Welcome To Eammu</h1>
      <h2 className="text-4xl font-light">Something New..!</h2>
      <p className="my-6">Eammu is a dynamic and innovative company at the forefront of digital transformation. Established in 2022, we specialize in e-commerce and marketing services, offering cutting-edge solutions to propel businesses to new heights. Our expertise extends to immigration consultancy services, guiding individuals and businesses through seamless transitions. Committed to excellence, we leverage technology to redefine industry landscapes, providing diverse services with a customer-centric approach. Join us on a journey of innovation, where Eammu shapes the future and exceeds expectations.</p>
      <Link to='/about'><h3 className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Explore More</h3> </Link>
    </div>
  </div>
        </div>

  

        {/* Eammu Immigration Services Heading Section */}
        <div className="hero min-h-[80vh] hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-6xl">
    <h1 className="text-3xl font-bold text-[#dbdbdb]">Eammu Immigration Services</h1>
    <h2 className="text-xl font-medium">Premier Study Abroad Agency Cumilla, Bangladesh |Excellence in Education Consultancy Services </h2>
      <p className="mb-5">Eammu Immigration Services, based in Cumilla, Bangladesh, is a trusted educational consultancy firm with over six years of experience. Since 2018, we have been dedicated to guiding Bangladeshi students to prestigious global universities, ensuring they secure scholarships and financial aid. Our expertise extends to premier visa services, covering all aspects of immigration. <br />We also offer the convenience of the cheapest airfares, making global travel accessible to all. Beyond flights, we specialize in tourist visa services and craft enticing group tour packages, providing seamless travel experiences. <br />At Eammu Immigration Services, we transform dreams into reality with unwavering dedication and a client-centric approach. Whether you are aspiring to study abroad, navigate immigration processes, or embark on a memorable journey, we are your trusted partner. Join us for a seamless and fulfilling experience in education, immigration, and travel.</p>
      <Link to='/eammuimmigrationservices'><h3 className="hover:shadow-[#bfc0bf] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Explore More</h3> </Link>
    </div>
  </div>
</div>

<div className="hero min-h-[80vh]  ">
  <div className="hero-content text-center">
  <div className="max-w-6xl">
    <h1 className="text-3xl font-bold text-[#0e300e] ">Eammu Immigration Services</h1>
    <h2 className="text-xl font-medium mt-10">Premier Study Abroad Agency Cumilla, Bangladesh |Excellence in Education Consultancy Services </h2>
      <p className="mb-5 mt-5 text-left">Eammu Immigration Services, based in Cumilla, Bangladesh, is a trusted educational consultancy firm with over six years of experience. Since 2018, we have been dedicated to guiding Bangladeshi students to prestigious global universities, ensuring they secure scholarships and financial aid. Our expertise extends to premier visa services, covering all aspects of immigration. <br />  <br />We also offer the convenience of the cheapest airfares, making global travel accessible to all. Beyond flights, we specialize in tourist visa services and craft enticing group tour packages, providing seamless travel experiences. <br />  <br />At Eammu Immigration Services, we transform dreams into reality with unwavering dedication and a client-centric approach. Whether you are aspiring to study abroad, navigate immigration processes, or embark on a memorable journey, we are your trusted partner. Join us for a seamless and fulfilling experience in education, immigration, and travel.</p>
      <Link to='/eammuimmigrationservices'><h3 className="hover:shadow-[#bfc0bf] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Explore More</h3> </Link>
    </div>
  </div>
</div>

{/* Our Services */}
            {/* Carosul */}
            {/* <!-- Carousel list --> */}
            <h1 className="text-center font-bold text-4xl">Our Services</h1>
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

{/* Why Choice Us */}

<div className="collapse collapse-arrow bg-base-200 my-6">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What sets Eammu Immigration Consultancy Services apart from other consulting firms?
  </div>
  <div className="collapse-content"> 
    <p> Eammu Immigration Consultancy Services distinguishes itself through over six years of proven excellence in guiding Bangladeshi students towards their academic goals abroad. Our commitment to personalized service, coupled with a successful track record, sets us apart in the field of educational consultancy.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How does Eammu Immigration Services ensure success in the university application process?
  </div>
  <div className="collapse-content"> 
    <p>We pride ourselves on our meticulous approach to the university application process. Our experienced team provides comprehensive support, assisting students in identifying the right scholarships and financial aid to make their global education aspirations a reality.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What makes Eammu Immigration Services a trusted partner in immigration processes?
  </div>
  <div className="collapse-content"> 
    <p>Eammu Immigration Services boasts seasoned professionals who navigate the intricacies of immigration processes with precision. Our personalized assistance ensures a smooth journey for individuals seeking to build a new life abroad.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How does Eammu Immigration Services cater to travel needs?
  </div>
  <div className="collapse-content"> 
    <p>We offer the advantage of the cheapest airfares, making international travel affordable. Whether you are traveling for education or leisure, our commitment to providing budget-friendly options ensures convenience for our clients.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  What makes Eammu Immigration Services stand out in tourist visa services and group tour packages?
  </div>
  <div className="collapse-content"> 
    <p>Our expertise goes beyond individual travel plans. We specialize in crafting tailor-made tourist visa services and enticing group tour packages, creating memorable and hassle-free travel experiences for our clients.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200 my-6">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How does Eammu Immigration Services ensure client satisfaction?
  </div>
  <div className="collapse-content"> 
    <p> Client satisfaction is our top priority. We approach each case with dedication and a client-centric focus, ensuring that our services align with the unique needs and aspirations of every individual we assist.</p>
  </div>
</div>

{/* Caresoul */}
<div className="carousel carousel-center rounded-box flex justify-center">
  
  <div className="carousel-item">
    <img className="w-[300px]" src="https://images.unsplash.com/photo-1590070572368-74a1e6da0a34?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className="w-[300px]" src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className="w-[300px]" src="https://images.unsplash.com/photo-1630930195151-3b8434d19cd3?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className="w-[300px]" src="https://plus.unsplash.com/premium_photo-1673285286254-d0d0e465e0fd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 


</div>

            {/* Our Succsses State */}
<div className="stats shadow flex my-12">
  
  <div className="stat place-items-center">
    <div className="stat-title">Study Destination</div>
    <div className="stat-value">22[+]</div>
    <div className="stat-desc">From January ,2022</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Happy Students</div>
    <div className="stat-value text-secondary">4,200[+]</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Colleges & Universities</div>
    <div className="stat-value">145[+]</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">38</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>

        </div>
    );
};

export default Home;