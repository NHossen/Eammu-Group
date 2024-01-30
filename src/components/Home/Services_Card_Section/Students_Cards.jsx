import { useEffect, useState } from "react";
import Student_Visa from "./Student_visa/Student_Visa";


const Students_Cards = () => {
    const [students,setStudents]=useState([]);

    // Show All Button Data Selection
    const [dataLength,setDataLength]=useState(3);

    useEffect(()=>{
        fetch('studentvisa.json')
        .then(res=>res.json())
        .then(data=>setStudents(data));
    },[])
    return (
        <div>
                  {/* Student visa */}
<h1 className="text-center text-4xl font-bold my-6">Students Favorite Top Countries for Higher Education</h1>

{/* Formating */}
<div className="grid lg:grid-cols-3 gap-4">
     {
        students.slice(0,dataLength).map(student=> <Student_Visa key={student.id} student={student}></Student_Visa>)
     }
</div>
<div className="flex justify-center my-3">
    <div className={dataLength === students.length && 'hidden'}>
     <button onClick={()=>setDataLength(students.length)} className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">See All</button>   
    </div>
    
</div>

        </div>
    );
};

export default Students_Cards;