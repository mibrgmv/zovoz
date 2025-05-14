import type {Product} from "../types";
import headphones from "../assets/headphones.jpg"
import smart_watch from "../assets/smart_watch.png"
import backpack from "../assets/backpack.png"
import wallet from "../assets/wallet.png"
import mug from "../assets/mug.png"
import lamp from "../assets/lamp.png"

export function getProducts(): Product[] {
    return [
        {
            id: 1,
            name: "ZV-Watch Smartwatch",
            price: 12990,
            category: "Electronics",
            description: "Smartwatch with health monitoring and notifications",
            inStock: true,
            rating: 4.7,
            imageUrl: smart_watch,
        },
        {
            id: 2,
            name: "ZV-Sound Wireless Headphones",
            price: 8990,
            category: "Electronics",
            description: "Headphones with active noise cancellation and high-quality sound",
            inStock: true,
            rating: 4.5,
            imageUrl: headphones,
        },
        {
            id: 3,
            name: "ZV-Pack Minimalist Backpack",
            price: 5490,
            category: "Accessories",
            description: "Waterproof city backpack with a laptop compartment",
            inStock: false,
            rating: 4.8,
            imageUrl: backpack,
        },
        {
            id: 4,
            name: "ZV-Wallet Leather Wallet",
            price: 3290,
            category: "Accessories",
            description: "Compact handmade leather wallet",
            inStock: true,
            rating: 4.6,
            imageUrl: wallet,
        },
        {
            id: 5,
            name: "ZV-Cup Ceramic Mug",
            price: 990,
            category: "Home",
            description: "Minimalist ceramic mug with thermal insulation",
            inStock: true,
            rating: 4.3,
            imageUrl: mug,
        },
        {
            id: 6,
            name: "ZV-Light Table Lamp",
            price: 4990,
            category: "Home",
            description: "Adjustable table lamp with variable light temperature",
            inStock: true,
            rating: 4.4,
            imageUrl: lamp,
        },
    ];
}