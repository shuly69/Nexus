"use client";
import { Container } from "@/shared/ui/Container/Container";
import { Specifications } from "./Specifications";
import { RecommendationSection } from "@/widgets/Cart/ui/RecommendedSection";
import { useEffect, useState } from "react";
import { useParams } from "next/dist/client/components/navigation";
import { productsSingle } from "@/shared/config/phone";
import { getProductBySlug } from "@/entities/Product/lib/getProductById";
import { PhoneNotFound } from "./PhoneNotFound";
import { useCartStore } from "@/features/cart/model/store";
import { useAdminStore } from "@/features/admin/model/adminStore";


export function PhoneSection() {
    const { phones, hydrate } = useAdminStore();
          useEffect(() => {
              hydrate();
            }, []);
     const params = useParams();
      const [quantity, setQuantity] = useState(1);
      const [selectedColor, setSelectedColor] = useState("");
      const product = getProductBySlug(String(params.id), phones);
      const { addToCart } = useCartStore();
      if (!product) {
        return <PhoneNotFound />;
      }
    return ( 
        <main className="px-4 py-8">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Product Image */}
                    <div className="bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl  flex items-center justify-center min-h-100">
                        <div className="text-9xl">
                            <img src={product.imageUrl} alt={product.fullName} className="max-w-full h-auto rounded-sm" />
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div>
                        {/* Badge */}
                        {product.badge && (
                            <span className="inline-block bg-red-100 text-red-700 text-sm px-3 py-1 rounded-full mb-4">
                                {product.badge}
                            </span>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.fullName}</h1>
                        <p className="text-gray-500 mb-4">{product.variants[0].colors[0].name}  {product.variants[0].capacity}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill={i < Math.floor(product.rating) ? "#fbbf24" : "#e5e7eb"} viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">{product.rating} out of 5</span>
                            <span className="text-sm text-gray-400">({product.reviews ?? 0} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                                {product.oldPrice && (
                                    <>
                                        <span className="text-xl text-gray-400 line-through">${product.oldPrice}</span>
                                    
                                    </>
                                )}
                            </div>
                            {product.freeShipping && (
                                <p className="text-sm text-green-600 mt-2">✓ Free shipping on this item</p>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {product.features.map((feature : any, idx : number) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition flex items-center justify-center"
                                >
                                    −
                                </button>
                                <span className="w-12 text-center font-medium text-gray-900">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600 transition flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => addToCart({ id: String(product.id), brand : product.brand, model: product.model, price: product.price, quantity: 1, capacity: product.variants[0].capacity, colorId: product.variants[0].colors[0].name, imageUrl: product.imageUrl })}
                                className="cursor-pointer max-w-57.5 flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition"
                            >
                                Add to Cart
                            </button>
                           
                        </div>

                        {/* Trust Badges */}
                        <div className="flex justify-between gap-4 pt-4 border-t border-gray-100">
                            <div className="text-center flex-1">
                                <div className="text-2xl mb-1">🔒</div>
                                <p className="text-xs text-gray-500">Secure Payment</p>
                            </div>
                            <div className="text-center flex-1">
                                <div className="text-2xl mb-1">🚚</div>
                                <p className="text-xs text-gray-500">Free Delivery</p>
                            </div>
                            <div className="text-center flex-1">
                                <div className="text-2xl mb-1">✅</div>
                                <p className="text-xs text-gray-500">100% Authentic</p>
                            </div>
                            <div className="text-center flex-1">
                                <div className="text-2xl mb-1">💳</div>
                                <p className="text-xs text-gray-500">0% Financing</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Specifications product={product} />
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">You might also like</h2>
                    <RecommendationSection  />
                </div>
            </Container>
        </main>
    )
}