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
{/* Second Heading */}
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

          <div className="hero rounded-lg " style={{backgroundImage: 'url(https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201864.jpg?w=900&t=st=1705480715~exp=1705481315~hmac=bb545996d05b4648c510a67b781717e086467c9056e7b3a06b9cfe02441e0274)'}}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-4xl">
                <h1 className="mb-5 text-5xl  font-bold">Student Visa Services</h1>
                <p className="mb-5">Welcome to Eammu Immigration Services, your trusted partner in unlocking the doors to global education! Specializing in Student Visa Services, we take immense pride in facilitating the academic dreams of Bangladeshi students across 45+ countries, with a primary focus on the United States, Europe, Canada, Australia, and Japan. <br /><br />At Eammu, we understand that embarking on a journey to study abroad is a significant decision. With this in mind, we offer first-class services and consultancy to ensure a seamless and hassle-free experience for our clients. Our dedicated team of experts is committed to providing personalized guidance, from the initial consultation to the successful acquisition of your student visa.</p>
                  {/* Modal For Student Visa */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]" onClick={()=>document.getElementById('my_modal_5').showModal()}>More Details</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-[#000000]">Student Visa</h3>
    <p className="py-4 text-[#000000]">Welcome to Eammu Immigration Services, your trusted partner in unlocking the doors to global education! Specializing in Student Visa Services, we take immense pride in facilitating the academic dreams of Bangladeshi students across 45+ countries, with a primary focus on the United States, Europe, Canada, Australia, and Japan. <br /><br />At Eammu, we understand that embarking on a journey to study abroad is a significant decision. With this in mind, we offer first-class services and consultancy to ensure a seamless and hassle-free experience for our clients. Our dedicated team of experts is committed to providing personalized guidance, from the initial consultation to the successful acquisition of your student visa.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Close</button>
      </form>
    </div>
  </div>
</dialog>
              </div>
            </div>
          </div>
          
          {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
            <a href="#slide4" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide2" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
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
                <p className="mb-5">Welcome to Eammu Immigration Services, your trusted partner for seamless Tourist Visa Services. With a global footprint covering over 100 countries, we specialize in facilitating visa applications for travelers looking to explore destinations such as the United States, Europe, Canada, Australia, Japan, Dubai, Qatar, Georgia, India, Sri Lanka, Malaysia, Maldives, and Thailand. <br /><br />At Eammu Immigration Services, we take pride in delivering first-class visa services and consultancy. Our experienced team is dedicated to ensuring a smooth and efficient visa application process, guiding you through every step with expertise and professionalism. Whether you are planning a leisurely trip, family vacation, or a business venture, we tailor our services to meet your specific needs.</p>

                {/* Modal For Tourist Visa */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]" onClick={()=>document.getElementById('my_modal_4').showModal()}>More Details</button>
<dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <h3 className="font-bold text-lg text-[#000000]">Tourist Visa</h3>
    <p className="py-4 text-[#000000]">Welcome to Eammu Immigration Services, your trusted partner for seamless Tourist Visa Services. With a global footprint covering over 100 countries, we specialize in facilitating visa applications for travelers looking to explore destinations such as the United States, Europe, Canada, Australia, Japan, Dubai, Qatar, Georgia, India, Sri Lanka, Malaysia, Maldives, and Thailand. <br /><br />At Eammu Immigration Services, we take pride in delivering first-class visa services and consultancy. Our experienced team is dedicated to ensuring a smooth and efficient visa application process, guiding you through every step with expertise and professionalism. Whether you are planning a leisurely trip, family vacation, or a business venture, we tailor our services to meet your specific needs.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Close</button>
      </form>
    </div>
  </div>
</dialog>
              </div>
            </div>
          </div>

           {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide3" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
          </div>
        </div> 

        {/* <!-- Slide 3 --> */}
        <div id="slide3" className="carousel-item relative w-full">

          {/* <!-- Background text and button section --> */}

          <div className="hero rounded-lg " style={{backgroundImage: 'url(https://img.freepik.com/free-photo/people-safety-equipment-their-workplace_23-2148976360.jpg?w=900&t=st=1705480819~exp=1705481419~hmac=5709f7cec9589a617189c47fbf5bfcf9e0e64a0d7881fb3ba4f4f84b3b0455ad)'}}>
            <div className="hero-overlay rounded-lg bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Work Visa Services</h1>
                <p className="mb-5">Welcome to Eammu Immigration Services, your premier partner for top-notch Work Visa Services. With an expansive reach covering over 100 countries, our expertise is particularly tailored for those seeking employment opportunities in prominent destinations such as the United States, Europe, Canada, Australia, Japan, Dubai, Qatar, Georgia, India, Sri Lanka, Malaysia, Maldives, and Thailand. <br /><br />At Eammu Immigration Services, we take pride in delivering unparalleled work visa services and consultancy. Our dedicated team is committed to guiding you through the intricacies of the work visa application process, ensuring a seamless and efficient experience. Whether you are pursuing career opportunities, professional development, or international business ventures, we understand the importance of a smooth visa application process.</p>
                  {/* Modal For Work Visa */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]" onClick={()=>document.getElementById('my_modal_3').showModal()}>More Details</button>
<dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <h3 className="font-bold text-lg text-[#000000]">Work Visa</h3>
    <p className="py-4 text-[#000000]">Welcome to Eammu Immigration Services, your premier partner for top-notch Work Visa Services. With an expansive reach covering over 100 countries, our expertise is particularly tailored for those seeking employment opportunities in prominent destinations such as the United States, Europe, Canada, Australia, Japan, Dubai, Qatar, Georgia, India, Sri Lanka, Malaysia, Maldives, and Thailand. <br /><br />At Eammu Immigration Services, we take pride in delivering unparalleled work visa services and consultancy. Our dedicated team is committed to guiding you through the intricacies of the work visa application process, ensuring a seamless and efficient experience. Whether you are pursuing career opportunities, professional development, or international business ventures, we understand the importance of a smooth visa application process.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Close</button>
      </form>
    </div>
  </div>
</dialog>

              </div>
            </div>
          </div>

           {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide4" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
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
              <p className="mb-5">Eammu Immigration Services is a premier travel agency specializing in comprehensive immigration services. With a dedicated team of experts, we offer assistance for a wide range of visas, ensuring a smooth and efficient process for our clients. Our commitment to excellence is reflected in our first-class visa services, providing personalized support and guidance at every step. <br /><br />In addition to our immigration expertise, Eammu Immigration Services goes beyond by offering top-notch services such as hotel bookings and securing the most affordable airfares. Our holistic approach aims to make the entire travel experience seamless and stress-free for our clients.</p>
                {/* Modal For Tourist Visa */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]" onClick={()=>document.getElementById('my_modal_2').showModal()}>More Details</button>
<dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <h3 className="font-bold text-lg text-[#000000]">All Kinds Of Immigration Services</h3>
    <p className="py-4 text-[#000000]">Eammu Immigration Services is a premier travel agency specializing in comprehensive immigration services. With a dedicated team of experts, we offer assistance for a wide range of visas, ensuring a smooth and efficient process for our clients. Our commitment to excellence is reflected in our first-class visa services, providing personalized support and guidance at every step. <br /><br />In addition to our immigration expertise, Eammu Immigration Services goes beyond by offering top-notch services such as hotel bookings and securing the most affordable airfares. Our holistic approach aims to make the entire travel experience seamless and stress-free for our clients.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Close</button>
      </form>
    </div>
  </div>
</dialog>
            </div>
          </div>
        </div>

          {/* <!-- Slide Buttons Container --> */}

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❮</a> 
            <a href="#slide1" className="bg-[#ffffff] w-12 h-12 rounded-full px-[20px] py-[12px]">❯</a>
          </div>
        </div>
      
      </div>

      {/* Target Usa Visa Interview Preparation */}

      <div>
        <h1 className="my-6 text-3xl text-center font-bold">Target <span className="text-[#d33232]">USA</span> Visa Interview Preparation</h1>
        <div className="hero min-h-[70vh] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Dtg4HWy/d-ISCUSSION.jpg" alt="targetusainterviewphoto" className="lg:max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Target <span className="text-[#d33232]">USA</span> Visa Interview Preparation!</h1>
      <p className="py-6">Target USA Visa Interview Preparation, a distinguished service under Eammu Immigration Services, is your premier education consultancy dedicated to preparing students for successful visa interviews. We specialize in comprehensive guidance, covering everything from interview dress-up to question patterns and interview types, ensuring that students are well-prepared for their crucial visa application process.</p>
      <Link to='/targetusavisainterview'><h3 className="hover:shadow-[#bfc0bf] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Explore More</h3> </Link>
    </div>
  </div>
</div>
      </div>


      {/* Message From Managing Director */}
      <div className="my-6 lg:flex flex-row justify-center gap-4 ">
              <div className="card w-96 bg-base-100 shadow-xl mb-4">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/tqdt8rZ/Naeem-Hossen.jpg" alt="Naeem-Hossen" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="card-title">Naeem Hossen</h1>
    <h2 className="font-medium">Managing Director</h2>
    <p>Message From Our Honarable Managing Director Mr.Naeem Hossen </p>
    <div className="card-actions">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]" onClick={()=>document.getElementById('my_modal_11').showModal()}>Message</button>
<dialog id="my_modal_11" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Welcome To Eammu Immigration Services</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
              <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/Dzgjj9Y/Sana-Ullah.jpg" alt="Sana-Ulla" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="card-title">Sana Ullah</h1>
    <h2 className="font-medium">Chef Executive Officer</h2>
    <p>Message From Our Honarable Chef Executive Officer Mr.Sana Ullah </p>
    <div className="card-actions">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]" onClick={()=>document.getElementById('my_modal_11').showModal()}>Message</button>
<dialog id="my_modal_11" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Welcome To Eammu Immigration Services</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
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
<div className="carousel carousel-center rounded-box grid gap-2 lg:grid-cols-4 grid-cols-1 justify-center p-2">
  
  <div className="carousel-item">
    <img className="lg:w-[300px]" src="https://images.unsplash.com/photo-1590070572368-74a1e6da0a34?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className="lg:w-[300px]" src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className="lg:w-[300px]" src="https://images.unsplash.com/photo-1630930195151-3b8434d19cd3?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className="lg:w-[300px]" src="https://plus.unsplash.com/premium_photo-1673285286254-d0d0e465e0fd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
  </div> 


</div>

            {/* Our Succsses State */}
<div className="grid lg:grid-cols-4 grid-cols-2 my-12">
  
  <div className="stat text-center">
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