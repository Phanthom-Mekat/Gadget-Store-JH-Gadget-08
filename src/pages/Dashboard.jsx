import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReuseableHero from "../components/detailsPage/ReuseableHero";
import { FaSort } from "react-icons/fa";
import CartCard from "../components/CartCard";
import WishlistCard from "../components/WishlistCard";
import { addToCartContext } from "../components/addToCartContexnt";
import Modal from "react-modal";


Modal.setAppElement('#root');

const Dashboard = () => {
    const [dashboard, setDashboard] = useState(null);
    const [sortedCarts, setSortedCarts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const { subtotal, carts, setCart, setSubtotal, wishlist,setCartCount } = useContext(addToCartContext);

    const handleDashboard = (e) => {
        setDashboard(e);
        if (e === 'carts') {
            setSortedCarts(carts);
        }
    };

    const handleSort = () => {
        const sorted = [...sortedCarts].sort((a, b) => b.price - a.price);
        setSortedCarts(sorted);
    };

    const handlePurchase = () => {
        setIsModalOpen(true); 
    };

    const confirmPurchase = () => {
        setCart([]);
        setSubtotal(0);
        setCartCount(0);
        
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/");
    };

    return (
        <div className="mb-10">
            <ReuseableHero header="Dashboard" />
            <div className="relative -top-64 flex justify-center items-center gap-3">
                <NavLink onClick={() => handleDashboard('carts')} className={`${dashboard === 'carts' ? 'btn w-32' : 'btn w-32 bg-primary text-white'}`}>
                    Cart    
                </NavLink>
                <NavLink onClick={() => handleDashboard('wishlist')} className={`${dashboard === 'wishlist' ? 'btn w-32' : 'btn w-32 bg-primary text-white'}`}>
                    Wishlist
                </NavLink>
            </div>
            <div>
                {dashboard === 'carts' && (
                    <div className="w-11/12 mx-auto">
                        <div className="flex justify-between mb-3">
                            <h2 className="text-xl text-bold ">Cart</h2>
                            <div className="flex gap-2 items-center">
                                <h3>Total Cost: ${subtotal.toFixed(2)}</h3>
                                <button onClick={handleSort} className="btn flex">
                                    Sort By Price <FaSort />
                                </button>
                                <button
                                    onClick={handlePurchase}
                                    className="btn flex"
                                    disabled={carts.length === 0 || subtotal === 0}>
                                    Purchase
                                </button>
                            </div>
                        </div>
                        <div className=" space-y-3 ">
                            {sortedCarts.map(cart => (
                                <CartCard
                                    key={cart.product_id}
                                    product_image={cart.product_image}
                                    title={cart.title}
                                    price={cart.price}
                                    description={cart.description}
                                    onRemove=""
                                />
                            ))}
                        </div>
                    </div>
                )}
                {dashboard === 'wishlist' && (
                    <div className="w-11/12 mx-auto">
                        <div className="flex justify-between mb-3">
                        <h2 className="text-xl text-bold">Wishlist</h2>
                        </div>
                        <div className=" space-y-3 ">
                            {wishlist.map(item => (
                                <WishlistCard
                                    key={item.product_id}
                                    product_image={item.product_image}
                                    title={item.title}
                                    price={item.price}
                                    description={item.description}
                                    onRemove=""
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

                {/* modal  */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Purchase Confirmation"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    content: {
                        position: 'static',
                        maxWidth: '400px',
                        padding: '0',
                        border: 'none',
                        borderRadius: '12px',
                        inset: 'unset',
                    },
                }}
            >
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg text-center">
                    <img src="./Group.png" alt="" />
                    <h2 className="text-xl font-bold mb-2">Payment Successfully</h2>
                    <hr className="w-full " />
                    <p className="text-gray-600 mb-4">Thanks for purchasing.<br />Total: ${subtotal.toFixed(2)}</p>
                    <button
                        onClick={() => { confirmPurchase(); closeModal(); }}
                        className="btn w-full py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </Modal>

        </div>
    );
};

export default Dashboard;
