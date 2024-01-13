import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

import { useEffect } from "react";
import Aos from "aos";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;