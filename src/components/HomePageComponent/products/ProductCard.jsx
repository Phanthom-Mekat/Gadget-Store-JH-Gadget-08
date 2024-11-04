import PropTypes from 'prop-types';
const ProductCard = ({ product }) => {
    return (
        <div className="card w-full bg-base-100 shadow-lg">
            <figure>
                <img src={product.product_image} alt={product.product_title} className="h-40 object-cover rounded-md" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.product_title}</h2>
                <p className="text-lg font-semibold">Price: ${product.price}</p>
                <div>
                    <button className="btn btn-ghost text-primary border-primary rounded-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductCard;
