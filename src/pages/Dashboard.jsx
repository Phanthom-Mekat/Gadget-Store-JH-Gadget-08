import { useContext, useState } from "react";
import ReuseableHero from "../components/detailsPage/ReuseableHero";
import { FaSort } from "react-icons/fa";
import CartCard from "../components/CartCard";
import WishlistCard from "../components/WishlistCard";
import { addToCartContext } from "../components/addToCartContexnt";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState(null);
    const [sortedCarts, setSortedCarts] = useState([]);
    const { subtotal, carts, wishlist } = useContext(addToCartContext);

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

    return (
        <div>
            <ReuseableHero header="Dashboard" />
            <div className="relative -top-64 flex justify-center items-center gap-3">
                <button onClick={() => handleDashboard('carts')} className="btn">
                    Cart
                </button>
                <button onClick={() => handleDashboard('wishlist')} className="btn">
                    Wishlist
                </button>
            </div>
            <div>
                {dashboard === 'carts' && (
                    <div className="w-11/12 mx-auto">
                        <div className="flex justify-between">
                            <h2 className="text-xl">Cart</h2>
                            <div className="flex gap-2 items-center">
                                <h3>Total Cost: ${subtotal.toFixed(2)}</h3>
                                <button onClick={handleSort} className="btn flex">
                                    Sort By Price <FaSort />
                                </button>
                                <button className="btn flex">Purchase</button>
                            </div>
                        </div>
                        <div>
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
                    <div>
                        <h2 className="text-xl">Wishlist</h2>
                        <div>
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
        </div>
    );
};

export default Dashboard;
