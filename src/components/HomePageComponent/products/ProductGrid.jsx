import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
const ProductGrid = ({ products }) => {
    console.log(products)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product) => (
                <ProductCard key={product.product_id} product={product} />
            ))}
        </div>
    );
};

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductGrid;
