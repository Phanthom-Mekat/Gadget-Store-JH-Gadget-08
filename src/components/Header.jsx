import { Link, NavLink, useLocation } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { useContext } from "react";
import { addToCartContext } from "./addToCartContexnt";
const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const   {cartCount,wishlistCount,subtotal}=useContext(addToCartContext)
    return (
        <>
            <div className={`navbar ${isHome ? "bg-primary text-white w-11/12 mx-auto rounded-t-xl" : "bg-base-100"} px-12`}>
            
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Statistics</a></li>
                            <li><a>Dashboard</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to="/stastics">Stastics</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">{cartCount}</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg text-black font-bold"> Items:{cartCount}</span>
                                    <span className="text-info">Subtotal: ${subtotal}</span>
                                    <Link to="/dashboard" className="card-actions">
                                        <button className="btn btn-outline text-primary btn-block">View cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <GiSelfLove />
                                    <span className="badge badge-sm indicator-item -top-1 -right-1">{wishlistCount}</span>
                                </div>
                            </div>
                        </div>
                        </div>    
                    </div>
                </div>
            </>
            );
};

            export default Header;
