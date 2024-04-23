import goimage from "../assets/images/Genmaicha.jpg"

interface myteas {
    heading: string;
    subheading: string;
    button1: string;
    button2: string;
    price: number;
    currency: string;
    imgage: any;
    stock: number | 0;
}

export const teas: myteas[] = [
    {
        heading: "Wakoucha",
        subheading: "Smooth Japanese black tea with subtle sweetness and delicate flavor notes.",
        button1: "Buy Now",
        button2: "Discover",
        price: 69,
        currency: "$",
        imgage: {goimage},
        stock: 56
    },
    {
        heading: "Wakoucha",
        subheading: "Smooth Japanese black tea with subtle sweetness and delicate flavor notes.",
        button1: "Buy Now",
        button2: "Discover",
        price: 150,
        currency: "$",
        imgage: {goimage},
        stock:0
    },
    {
        heading: "Wakoucha",
        subheading: "Smooth Japanese black tea with subtle sweetness and delicate flavor notes.",
        button1: "Buy Now",
        button2: "Discover",
        price: 96,
        currency: "$",
        imgage: {goimage},
        stock: 156
    },
    {
        heading: "Wakoucha",
        subheading: "Smooth Japanese black tea with subtle sweetness and delicate flavor notes.",
        button1: "Buy Now",
        button2: "Discover",
        price: 1,
        currency: "$",
        imgage: {goimage},
        stock: 0
    },
]