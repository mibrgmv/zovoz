import {useState} from 'react';
import {ProductCard} from "./components";
import {getProducts} from "./api";

export default function ZoVoZMarketplace() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const productsData = getProducts()

    const categories = Array.from(new Set(productsData.map(p => p.category)));

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-screen-xl mx-auto py-8 px-4">
            {/* Заголовок */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-2">ZoVoZ</h1>
                <p className="text-gray-600">Minimalist Goods for Modern Living</p>
            </header>

            {/* Панель фильтров */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <select
                        className="w-full md:w-48 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black bg-white"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Список товаров */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-gray-500">
                        No products found. Please try adjusting your search criteria.
                    </div>
                )}
            </div>

            {/* Подвал */}
            <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                <p>© 2025 ZoVoZ. All rights reserved.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="#" className="hover:text-black">About Us</a>
                    <a href="#" className="hover:text-black">Contact Us</a>
                    <a href="#" className="hover:text-black">Shipping</a>
                </div>
            </footer>
        </div>
    );
}