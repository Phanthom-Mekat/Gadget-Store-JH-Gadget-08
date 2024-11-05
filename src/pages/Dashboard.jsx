import { useContext, useState } from "react";
import ReuseableHero from "../components/detailsPage/ReuseableHero";
import { FaSort } from "react-icons/fa";
import CartCard from "../components/CartCard";
import WishlistCard from "../components/WishlistCard";
import { addToCartContext } from "../components/addToCartContexnt";

const Dashboard = () => {
    const [dashboard, setDashboard] = useState(null);
    
    const {carts} = useContext(addToCartContext);
    const {wishlist} = useContext(addToCartContext)
    console.log(carts)
    const handleDashboard = (e) => {
        setDashboard(e);
    };

    return (
        <div>
            <ReuseableHero header='Dashboard' />
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
                                <h3>Total Cost:</h3>
                                <button className="btn flex">Sort By Price <FaSort></FaSort></button>
                                <button className="btn flex">Purchase</button>
                            </div>
                        </div>
                        <div>
                            {carts.map(cart =>  <CartCard key={cart.product_id} product_image={cart.product_image} title={cart.title} price={cart.price} description={cart.description} onRemove='' />)
                            }
                        </div>
                    </div>
                )}
                {dashboard === 'wishlist' && (
                <div>

                    <div>
                        <h2 className="text-xl">Wishlist</h2>
                    </div>
                    <div>
                    {wishlist.map(wishlist =>  <WishlistCard key={wishlist.product_id} product_image={wishlist.product_image} title={wishlist.title} price={wishlist.price} description={wishlist.description} onRemove='' />)
                            }
                    </div>
                </div>

                )}
            </div>
        </div>
    );
};

export default Dashboard;
