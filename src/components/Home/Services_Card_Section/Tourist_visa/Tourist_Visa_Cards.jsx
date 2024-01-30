import { useEffect, useState } from "react";
import Tourist_Visa from "./Tourist_Visa";

const Tourist_Visa_Cards = () => {

    const [tourists,setTourists]=useState([]);

    // Show All Button Data Selection
    const [dataLength,setDataLength]=useState(3);

    useEffect(()=>{
        fetch('touristvisa.json')
        .then(res=>res.json())
        .then(data=>setTourists(data));
    },[])
    return (
        <div>
            {/* Tourist visa */}

<h1 className="text-center text-4xl font-bold my-6">Top Favorite  Countries for Tourist</h1>

{/* Formating */}
<div className="grid lg:grid-cols-3 gap-4">
     {
        tourists.slice(0,dataLength).map(tourist=> <Tourist_Visa key={tourist.id} tourist={tourist}></Tourist_Visa>)
     }
</div>
<div className="flex justify-center my-3">
    <div className={dataLength === tourists.length && 'hidden'}>
     <button onClick={()=>setDataLength(tourists.length)} className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">See All</button>   
    </div>
    
</div>



        </div>
    );
};

export default Tourist_Visa_Cards;