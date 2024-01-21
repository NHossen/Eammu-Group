import { useEffect, useState } from "react";
import Student_Visa from "./Student_visa/Student_Visa";


const Students_Cards = () => {
    const [students,setStudents]=useState([]);

    useEffect(()=>{
        fetch('studentvisa.json')
        .then(res=>res.json())
        .then(data=>setStudents(data));
    },[])
    return (
        <div>
                  {/* Student visa */}
<h1 className="text-center text-4xl font-bold my-6">Students Favorite Top Countries for Higher Education: {students.length}</h1>

<div>
     {
        students.map(student=> <Student_Visa key={student.id} student={student}></Student_Visa>)
     }
</div>
<div>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src="https://img.freepik.com/free-photo/medium-shot-smiley-people-with-american-flag_23-2149383053.jpg?w=826&t=st=1705764083~exp=1705764683~hmac=ea4eda8f86424c4cf167c4fd0e8ee520cf0341e4237f21f8f1a4d4135eaee432" alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">Study In Usa</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions">
<button className="btn btn-primary">Learn More</button>
</div>
</div>
</div>
</div>
        </div>
    );
};

export default Students_Cards;