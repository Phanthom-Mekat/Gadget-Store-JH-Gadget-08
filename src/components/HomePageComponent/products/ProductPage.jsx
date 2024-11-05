import  { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import ProductGrid from './ProductGrid';
import { useLoaderData } from 'react-router-dom';
const categoriesData = [
    {
    "id": 1,
    "name": "All Product"
    },
    {
    "id": 2,
    "name": "Laptops"
    },
    {
    "id": 3,
    "name": "Phones"
    },
    {
    "id": 4,
    "name": "Accessories"
    },
    {
    "id": 5,
    "name": "Smart Watches"
    },
    {
    "id": 6,
    "name": "MacBook"
    },
    {
    "id": 7,
    "name": "Iphone"
    }
]

const ProductPage = () => {
    const productsData = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('All Product');
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    useEffect(() => {
        if (selectedCategory === 'All Product') {
            setFilteredProducts(productsData);
        } else {
            setFilteredProducts(
            productsData &&   productsData.filter((product) => product.category === selectedCategory)
            );
        }
    }, [selectedCategory, productsData]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-col lg:flex-row">
                <aside className="w-full lg:w-1/4">
                    <CategoryList
                        categories={categoriesData}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                </aside>
                <main className="w-full lg:w-3/4">
                    <ProductGrid products={filteredProducts} />
                </main>
            </div>
        </div>
    );
};

export default ProductPage;
