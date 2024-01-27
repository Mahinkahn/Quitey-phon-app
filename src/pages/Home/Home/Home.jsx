import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Testi from "../Testimonials/Testi";
import News from "../News/News";
import Froms from "../Froms/Froms";




const Home = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Testi></Testi>
            <News></News>
            <Froms></Froms>

        </div>
    );
};

export default Home;