import { useCartStore } from "@/features/cart/model/store";
import { products } from "@/shared/config/phone";

export function EmptyCartState() {
  const addToCart = useCartStore(state => state.addToCart);
  const clearCart = useCartStore(state => state.clearCart);

  const addDemoItems = () => {
    clearCart();

    const demoIds = [1, 2];

    demoIds.forEach(id => {
      const product = products.find(p => p.id === id);
      if (!product) return;

      addToCart({
        id: String(product.id),
        colorId: product.variants[0].colors[0].name,
        capacity: product.variants[0].capacity,
        quantity: 1,
        model: product.model,
        brand: product.brand,
        price: product.price,
        imageUrl: product.imageUrl
      });
    });
  };


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
      <div className="text-7xl mb-4">🛒</div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">Looks like you haven't added any smartphones yet.</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={addDemoItems}
          className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium"
        >
          Browse Popular Phones
        </button>
        <button
          onClick={() => {
            const product = products.find(p => p.id === 1);
            if (!product) return;

            addToCart({
              id: String(product.id),
              colorId: product.variants[0].colors[0].name,
              capacity: product.variants[0].capacity,
              quantity: 1,
              model: product.model,
              brand: product.brand,
              price: product.price,
              imageUrl: product.imageUrl
            });
          }}

          className="cursor-pointer px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition font-medium"
        >
          Add Demo Items
        </button>
      </div>
    </div>
  )
}