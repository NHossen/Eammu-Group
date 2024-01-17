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

          </div>


          {/* About Eammu Immigration Services */}


          <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">About Eammu Immigration Services</h1>

      <div className="space-y-6">
        <p className="text-lg">
          Established in 2018, Eammu Immigration Services is a globally recognized Immigration Visa Consultant. With a
          strong presence in over 50 company-owned and managed offices across India, UAE, UK, Australia, and Canada, we
          have been dedicated to shaping successful overseas careers.
        </p>

        <div className="flex items-center space-x-2">
          <span className="text-green-500">Global Presence</span>
          <p>
            Our 1500+ committed employees serve over 10,00,000 happy customers each year. Word-of-mouth referrals
            constitute more than 50% of our client base, a testament to the trust and satisfaction we deliver.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-blue-500">Affordable and Success-Driven</span>
          <p>
            At Eammu Immigration Services, we prioritize affordability. Our service fee is structured so that we are
            paid only upon successfully completing the visa processing. Our core competence lies in visa documentation
            expertise, particularly in green cards.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-purple-500">Expertise and Processing Volume</span>
          <p>
            We process the highest number of immigration cases in India, backed by thousands of successful case
            studies. This wealth of experience enables us to handle any type of case with precision and efficiency.
          </p>
        </div>

        <hr className="my-8" />

        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">Trust and Transparency</span>
          <p>
            What sets us apart is the trust our brand exudes and the transparency of our process. Our commitment is
            reinforced by a proper legal agreement, including a clear refund policy for added peace of mind.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl mt-6">Eammu Immigration Services</h2>
          <p>
            At Eammu Immigration Services, we are dedicated to ensuring your journey to Europe is as smooth as can be.
            Here is why choosing us makes all the difference:
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-teal-500">Comprehensive Travel Support</span>
              <p>
                From visa applications to travel arrangements, our team provides comprehensive support to make your
                journey hassle-free.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-teal-500">Seamless Travel Planning</span>
              <p>
                Our seamless travel planning ensures that every detail, from flights to accommodations, is meticulously
                organized.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-teal-500">Expert Guidance</span>
              <p>
                Rely on our team of experts for guidance on visa processes, documentation, and any other queries you may
                have.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-teal-500">24/7 Support</span>
              <p>
                Our commitment to your journey does not end. We provide round-the-clock support for any issues or
                concerns you may encounter.
              </p>
            </div>
          </div>

          <hr className="my-8" />

          <h2 className="text-xl mt-6">Connect with Us to Commence Your Unforgettable Journey!</h2>
          <div className="space-y-4">
            <p>Call/WhatsApp: +8801701699743, +971507078334</p>
            <p>Email: eammuimmigration@gmail.com</p>
            <a href="http://www.eammu.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Website: www.eammu.com
            </a>
          </div>

          <button className="bg-[#082208] text-white px-6 py-2 rounded-full mt-6">Get Started</button>
        </div>
      </div>
    </div>


            

        </div>
    );
};

export default EammuImmigrationServices;