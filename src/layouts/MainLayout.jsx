import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContextProvider from "../components/ContextProvider";


const MainLayout = () => {
    
    return (
        <ContextProvider>
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </ContextProvider>
    );
};

export default MainLayout;