
"use client";

import { useCartStore } from "@/features/cart/model/store";
import type { ProductSpecs } from "../type/model";

interface AddToCartButtonProps {
  id: string;
  model: string;
  brand: string;
  color: string;
  capacity: string;
  price: number;
  imageUrl?: string;
  // Required by CartItem – passed from the parent Card component.
  specs: ProductSpecs;
  description: string;
  features: string[];
}

export function AddToCartButton({
  id,
  model,
  brand,
  color,
  capacity,
  price,
  imageUrl,
  specs,
  description,
  features,
}: AddToCartButtonProps) {
  const { addToCart } = useCartStore();

  const handleClick = () => {
    addToCart({
      id: String(id),
      model,
      brand,
      colorId: color,
      capacity,
      price,
      quantity: 1,
      imageUrl,
      specs,
      description,
      features,
    });
  };

  return (
    <button
      className="flex gap-1.5 w-19 h-9 items-center justify-center bg-black rounded-xl cursor-pointer hover:bg-[#4F46E5] transition-colors duration-300"
      onClick={handleClick}
    >
      <svg
        width="11"
        height="12"
        viewBox="0 0 11 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 10.0834C0.75 10.3928 0.872916 10.6896 1.09171 10.9084C1.3105 11.1272 1.60725 11.2501 1.91667 11.2501C2.22609 11.2501 2.52283 11.1272 2.74162 10.9084C2.96042 10.6896 3.08333 10.3928 3.08333 10.0834C3.08333 9.774 2.96042 9.47725 2.74162 9.25846C2.52283 9.03966 2.22609 8.91675 1.91667 8.91675C1.60725 8.91675 1.3105 9.03966 1.09171 9.25846C0.872916 9.47725 0.75 9.774 0.75 10.0834ZM7.16667 10.0834C7.16667 10.3928 7.28958 10.6896 7.50838 10.9084C7.72717 11.1272 8.02391 11.2501 8.33333 11.2501C8.64275 11.2501 8.9395 11.1272 9.15829 10.9084C9.37708 10.6896 9.5 10.3928 9.5 10.0834C9.5 9.774 9.37708 9.47725 9.15829 9.25846C8.9395 9.03966 8.64275 8.91675 8.33333 8.91675C8.02391 8.91675 7.72717 9.03966 7.50838 9.25846C7.28958 9.47725 7.16667 9.774 7.16667 10.0834Z"
          stroke="white"
        />
        <path d="M8.33333 8.91667H1.91667V0.75H0.75" stroke="white" />
        <path
          d="M1.9165 1.91675L10.0832 2.50008L9.49984 6.58341H1.9165"
          stroke="white"
        />
      </svg>
      <span className="text-[12px] text-white">Add</span>
    </button>
  );
}
