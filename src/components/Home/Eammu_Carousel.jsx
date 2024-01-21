

const Eammu_Carousel = () => {
    return (
        <div>
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
        </div>
    );
};

export default Eammu_Carousel;