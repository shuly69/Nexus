export interface CartItem {
  id:  string | number;         
  colorId: string;     
  capacity: string;    
  quantity: number;   
  price: number;       
  model: string;       
  brand: string;
  imageUrl?: string;
  specs: any;
  description: string;
  features: string[];      
}



export interface CartState {
  items: CartItem[];

  findItem: (id: number | string, colorId: string, capacity: string) => CartItem | undefined;

  addToCart: (item: CartItem) => void;

  removeFromCart: (
    id: string,
    colorId: string,
    capacity: string
  ) => void;

  increase: (
    id: string,
    colorId: string,
    capacity: string
  ) => void;

  decrease: (
    id: string,
    colorId: string,
    capacity: string
  ) => void;

  clearCart: () => void;
}

