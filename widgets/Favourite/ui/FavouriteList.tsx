"use client";
import { Card } from "@/entities/Card/ui/Card";
import { useFavouriteStore } from "@/features/favourite/model/store";
import { EmptyFavouriteList } from "./EmptyFavouriteList";

export function FavouriteList() {
    const {items} = useFavouriteStore();
    return (
        <> 
        {(items.length === 0) ? <EmptyFavouriteList /> :
        (
        <>
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Your favourites
          </h1>
          <p className="text-gray-500 mt-2">
            All the products you’ve saved in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {items.map(item => (
                <Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} imageUrl={item.imageUrl || ''} variants={[{capacity: item.capacity,
 colors: [{ name: item.colorId, stock: 1 }]}]} />
            ))}
        </div>
        </>
        )}
        </>
        
    )
}