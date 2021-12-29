export class cart{
    items?:cartItem[];
}

export class cartItem{
    productId?: string;
    quantity?: number;
  
}

export class cartItemDetails{
    product?: any;
    quantity?: number;
  
}