

const MessageFromLeadingTeam = () => {
    return (
        <div>
            <div className="my-6 lg:flex flex-row justify-center gap-4 ">
<div className="card w-96 bg-base-100 shadow-xl mb-4">
<figure className="px-10 pt-10">
<img src="https://i.ibb.co/tqdt8rZ/Naeem-Hossen.jpg" alt="naeem_hossen_managingdirectorof_eammuimmigrationservices" className="rounded-xl" />
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
<p className="py-4">At Eammu Immigration Services, we take pride in offering premium student visa services, ensuring that students have a seamless and efficient process when applying for visas to pursue their education abroad. Our team is dedicated to providing comprehensive support and guidance to students, making their visa application experience as smooth as possible. <br /><br />In addition to our premium student visa services, we also specialize in providing a wide range of visa services for various purposes. Whether it's for tourism, business, or other travel needs, our team is committed to assisting individuals in obtaining the necessary visas for their specific requirements. <br /> <br />At Eammu Immigration Services, we prioritize customer satisfaction and strive to exceed expectations in delivering reliable and professional visa services. Our experienced and knowledgeable staff is here to assist you throughout the entire visa application process, ensuring that you have the support you need at every step.</p>
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
<p className="py-4">At Eammu Immigration Services, we take pride in offering premium student visa services, ensuring that students have a seamless and efficient process when applying for visas to pursue their education abroad. Our team is dedicated to providing comprehensive support and guidance to students, making their visa application experience as smooth as possible. <br /><br />In addition to our premium student visa services, we also specialize in providing a wide range of visa services for various purposes. Whether it's for tourism, business, or other travel needs, our team is committed to assisting individuals in obtaining the necessary visas for their specific requirements. <br /> <br />At Eammu Immigration Services, we prioritize customer satisfaction and strive to exceed expectations in delivering reliable and professional visa services. Our experienced and knowledgeable staff is here to assist you throughout the entire visa application process, ensuring that you have the support you need at every step.</p>
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
        </div>
    );
};

export default MessageFromLeadingTeam;