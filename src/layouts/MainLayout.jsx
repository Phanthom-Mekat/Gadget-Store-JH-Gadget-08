import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContextProvider from "../components/ContextProvider";
import { ToastContainer,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {

    return (
        <ContextProvider>
            <HelmetProvider>
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            </HelmetProvider>
        </ContextProvider>
    );
};

export default MainLayout;