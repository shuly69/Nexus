"use client";
import { useCartStore } from '@/features/cart/model/store';
import { CartItem } from '@/features/cart/type/model';
import { useCheckoutStore } from '@/features/checkout/model/useCheckoutStore';
import { CheckoutModal } from '@/features/checkout/ui/CheckoutModal';
import { phoneCards } from '@/shared/config/phone';
import { CartItemTable } from '@/widgets/Cart/ui/CartItemTable';
import { EmptyCartState } from '@/widgets/Cart/ui/EmptyCartState';
import { OrderSummarySection } from '@/widgets/Cart/ui/OrderSummarySection';
import { RecommendationSection } from '@/widgets/Cart/ui/RecommendedSection';
export function CartSection() {
     const { items, addToCart, findItem } = useCartStore();
      const subtotal = items.reduce((sum : number, item : CartItem) => sum + (item.price * item.quantity), 0);
      const tax = subtotal * 0.08;
      const shipping = subtotal > 0 ? 0 : 0;
      const total = subtotal + tax;
      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <p className="text-gray-500 mt-1">{items.length} {items.length === 1 ? 'item' : 'items'} in your cart</p>
            </div>
    
            {items.length === 0 ? (
              // Empty Cart State
              <EmptyCartState />
            ) : (
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Cart Items Section */}
                <CartItemTable  />
    
                {/* Order Summary Section */}
                <OrderSummarySection  subtotal={subtotal} tax={tax} total={total}  handleCheckout={() => useCheckoutStore.getState().openConfirm()} />
              </div>
            )}
    
            {/* Recommended Products Section */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">You Might Also Like</h2>
              </div>
              
              <RecommendationSection  />
            </div>
          </div>
    
          {/* Checkout Modal */}
          <CheckoutModal total={total}  />
        </div>
      );
}