import { Outlet } from "react-router-dom";
import ReuseableHero from "../components/detailsPage/ReuseableHero";

const Details = () => {
    return (
        <div>
         
            <ReuseableHero header="Product Details"/>
            <Outlet/>
          
        </div>
    );
};

export default Details;