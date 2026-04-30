
import { AddToCartButton } from "./AddToCard";

export function RecommendationCard({ brand, model, id, color, capacity, price, oldPrice, imageUrl, slug }: { brand: string; model: string; id: string; color: string; capacity: string; price: number; oldPrice?: number; imageUrl: string , slug: string | undefined}) {
    return (
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col items-center w-50 min-h-70">
            <a href={`/catalog/${slug}`} className="bg-white rounded-2xl border-none flex flex-col items-center">
                <img src={imageUrl} alt={`${brand} ${model}`} className="w-32 h-32 object-contain mb-4" />
            </a>
            <div className="flex justify-center gap-1 w-full">
                <h3 className="text-sm font-medium text-gray-900">{brand}</h3>
                <p className="text-sm text-gray-500">{model}</p>
            </div>

            <p className="text-sm text-gray-500">{color} · {capacity}</p>
            <div className="flex justify-between w-full mt-4 ">
                <div className="flex flex-col items-center">
                    <p className="text-lg font-semibold text-gray-900 ">${price}</p>
                    {oldPrice && <p className="text-sm text-gray-500 line-through">${oldPrice}</p>}
                </div>

                <AddToCartButton id={id} model={model} brand={brand} color={color} capacity={capacity} price={price} imageUrl={imageUrl} />
            </div>
            
        </article>
    )

}