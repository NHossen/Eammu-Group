import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const MainRoot = () => {
    return (
        <div className=" ">
            <Header></Header>
            <div className="px-4 container mx-auto">
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
          
        </div>
    );
};

export default MainRoot;