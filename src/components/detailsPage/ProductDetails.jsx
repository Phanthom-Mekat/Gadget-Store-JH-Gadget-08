import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ReuseableHero from "./ReuseableHero";
import { addToCartContext } from "../addToCartContexnt";
import { toast,Bounce,Flip } from "react-toastify";


const ProductDetails = () => {
    const product = useLoaderData();
    const { product_id } = useParams();
    const [details, setDetails] = useState({});

    const { carts, setCart, wishlist, setWishlist, subtotal, cartCount, wishlistCount, setCartCount, setWishlistCount, setSubtotal
    }
        = useContext(addToCartContext);

    useEffect(() => {
        const foundProduct = product && product.find((item) => item.product_id == product_id);
        if (foundProduct) {
            setDetails(foundProduct);
        }
    }, [product, product_id]);

    const isInWishlist = wishlist.some(item => item.product_id === details.product_id);

    const handleCart = (details) => {
        setCart([...carts, details]);
        setCartCount(cartCount + 1);
        setSubtotal(details.price + subtotal);
        toast.success(`Added ${details.product_title} to cart`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });

    };

    const handleWishlist = (details) => {
        if (!isInWishlist) {
            setWishlist([...wishlist, details]);
            setWishlistCount(wishlistCount + 1);
            
            toast.success(`Added ${details.product_title} to wishlist`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
                });

        }
    };

    if (!details.product_title) return <p>Loading...</p>;

    return (
        <section>
            <ReuseableHero header="Product Details" />
            <div className="flex p-6 border rounded-lg shadow-md bg-white w-7/12 mx-auto relative -top-56">
                <div className="w-2/3 p-5 items-center">
                    <figure>
                        <img src={details.product_image} alt={details.product_title} className="h-full w-full object-cover rounded-md" />
                    </figure>
                </div>
                <div className="w-2/3 px-6 space-y-4">
                    <h2 className="text-2xl font-bold">{details.product_title}</h2>
                    <p className="text-lg font-semibold">Price: ${details.price}</p>
                    <span
                        className={`inline-block px-2 py-1 text-sm font-medium rounded-full ${details.availability ? 'bg-green-200 border-2 border-green-700 text-green-800' : 'bg-red-200 text-red-800 border-2 border-red-700'
                            }`}
                    >
                        {details.availability ? "In Stock" : "Out of Stock"}
                    </span>
                    <p className="mt-2 text-gray-700">{details.description}</p>

                    <div>
                        <h3 className="text-lg font-semibold mt-4">Specification:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {Object.entries(details.specification).map(([key, value], index) => (
                                <li key={index} className="text-gray-500">{`${key}: ${value}`}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center mt-4">
                        <p className="text-lg font-semibold mr-2">Rating:</p>
                        <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${i < Math.floor(details.rating) ? 'text-yellow-500' : 'text-gray-300'
                                        }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962h4.174c.969 0 1.371 1.24.588 1.81l-3.383 2.46 1.286 3.962c.3.921-.755 1.688-1.54 1.168L10 13.347l-3.383 2.46c-.785.52-1.84-.247-1.54-1.168l1.286-3.962-3.383-2.46c-.784-.57-.38-1.81.588-1.81h4.174l1.286-3.962z" />
                                </svg>
                            ))}
                            <p className="ml-2 text-gray-700">{details.rating}</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => handleCart(details)}
                            className="mt-4 flex btn px-4 py-2 bg-primary text-white rounded-full font-semibold"
                        >
                            Add to Cart
                            <IoCartOutline className="text-xl font-bold" />
                        </button>

                        <button
                            onClick={() => handleWishlist(details)}
                            className="mt-4 btn-ghost px-4 py-2 text-black rounded-lg font-semibold"
                            disabled={isInWishlist}
                        >
                            {isInWishlist ? <FaHeart className="text-xl text-red-500" /> : <FaRegHeart className="text-xl" />}
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ProductDetails;
