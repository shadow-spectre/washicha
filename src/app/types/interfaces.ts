export interface IfHomepageSection {
    className: string;
    cards: (number | string | JSX.Element)[];
}

export interface IfCards{
    className: string;
    heading: string;
    subheading: string;
    button1?: string;
    button2?: string;
    price?: number;
    currency?: string;
    imgage?: any;
    stock?: number;
}

export interface IfButton{
    className: string;
    text: string;
}