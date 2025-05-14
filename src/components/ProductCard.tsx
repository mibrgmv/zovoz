import type {Product} from "../types";
import {StarRating} from "./StarRating.tsx";

export const ProductCard = ({product}: { product: Product }) => {
    return (
        <div
            className="border border-gray-200 rounded p-4 flex flex-col h-full transition-transform duration-300 hover:shadow-lg hover:scale-105">
            <div className="relative">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover mb-4 bg-gray-100"
                />
                {!product.inStock && (
                    <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs">
                        Нет в наличии
                    </div>
                )}
            </div>
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2 flex-grow">{product.description}</p>
            <div className="mt-auto">
                <StarRating rating={product.rating}/>
                <div className="flex justify-between items-center mt-3">
                    <span className="font-bold">{product.price.toLocaleString()} ₽</span>
                    <button
                        disabled={!product.inStock}
                        className={`px-3 py-1 text-sm ${product.inStock ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                        {product.inStock ? 'В корзину' : 'Недоступно'}
                    </button>
                </div>
            </div>
        </div>
    );
};