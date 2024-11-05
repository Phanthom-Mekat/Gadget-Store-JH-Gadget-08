import { FaRegTimesCircle } from "react-icons/fa";
import Proptypes from "prop-types";

const WishlistCard = ({ product_image, title, price, description, onRemove, onAddToCart }) => (
    <div className="flex justify-between items-center p-4 border-b rounded-lg bg-gray-50 shadow-xl ">
        <div>
            <figure>
                <img src={product_image} alt=""  className="h-20 object-cover"/>
            </figure>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-500">{description}</p>
                <p className="text-lg font-bold">Price: ${price}</p>
            <button onClick={onAddToCart} className="btn ">
                addToCart
            </button>
            </div>
        </div>
        <div className="flex gap-2">
            <button onClick={onRemove} className="text-red-500">
                <FaRegTimesCircle className="text-2xl" />
            </button>
        </div>
    </div>
);

WishlistCard.propTypes = {
    product_image: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
    onRemove: Proptypes.func.isRequired,
    onAddToCart: Proptypes.func.isRequired,
};


export default WishlistCard;
