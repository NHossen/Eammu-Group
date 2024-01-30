
import { Link } from "react-router-dom";
const Tourist_Visa = ({tourist}) => {
    const { id,countryName, title, description,image } = tourist;
    return (
        <div>
                  <div>
        <div>
          <div className="card card-compact h-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt="University_Photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{countryName}</h2>
              <h2 className="">{title}</h2>
              <p>{description}</p>
              <div className="card-actions">
                <Link to={`/university_details/${id}`}><button className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Learn More</button></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Tourist_Visa;