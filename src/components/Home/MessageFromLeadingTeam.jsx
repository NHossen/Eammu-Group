

const MessageFromLeadingTeam = () => {
    return (
        <div>
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
        </div>
    );
};

export default MessageFromLeadingTeam;