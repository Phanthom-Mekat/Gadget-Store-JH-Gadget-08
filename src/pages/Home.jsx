import Banner from "../components/HomePageComponent/Banner";
import Hero from "../components/HomePageComponent/Hero";
import { Outlet } from "react-router-dom";
const Home = () => {
    return (
        <div>
            {/* hero */}
            <Hero/>
            {/* banner */}
            <Banner/>
            {/* nested route */}
            <Outlet />
        </div>
    );
};

export default Home;