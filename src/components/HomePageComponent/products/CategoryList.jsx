import PropTypes from 'prop-types';
const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="space-y-2 bg-gray-50 shadow-md rounded-xl p-6">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.name)}
                    className={`btn btn-outline hover:btn-ghost  w-full ${
                        selectedCategory === category.name ? 'bg-primary text-white rounded-full' : ''
                    }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired, 
    selectedCategory: PropTypes.string.isRequired,
    onSelectCategory: PropTypes.func.isRequired,
};

export default CategoryList;
