type ProductCardProps = {
    productId: string;
    image: string;
    name: string;
    price: number;
    category: string;
    onClick?: () => void;   
    addProduct?: (productId: string) => void;
}

