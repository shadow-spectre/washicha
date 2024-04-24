export interface IfHomepageSection {
    className: string;
    cardsData: IfCards[];
}

export interface IfCards{
    id: string;
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