"use client";
import { CardPhone, Variant, ColorVariant} from "@/entities/Card/type/model";
import { addVariantToForm, removeVariantFromForm } from "@/entities/Phone/lib/updateColor";
import { useState } from "react";
const initialForm: CardPhone = {
        id: 1,
        model: '',
        fullName: '',
        brand: '',
        category: '',
        rating: 0,
        reviews: 0,
        price: 0,
        imageUrl: '',
        description: '',
        features: [],
        specs: {
            display: '',
            processor: '',
            camera: '',
            battery: '',
        },
        variants: [],
    }


const initialVariant: Variant = {
  capacity: "",
  sku: "",
  colors:  [
    {
      id: "",
      name: "",
      stock: 0,
    },
  ],
};


export function usePhoneForm() {
  const [formData, setFormData] = useState<Partial<CardPhone>>(initialForm);
  const [currentVariant, setCurrentVariant] = useState<Variant>(initialVariant);

  const addVariant = () => {
    setFormData(prev => addVariantToForm(prev, currentVariant));
    setCurrentVariant(initialVariant);
  };

  const removeVariant = (index: number) => {
    setFormData(prev => removeVariantFromForm(prev, index));
  };

  const reset = () => {
    setFormData(initialForm);
    setCurrentVariant(initialVariant);
  };

  return {
    formData,
    setFormData,
    currentVariant,
    setCurrentVariant,
    addVariant,
    removeVariant,
    reset
  };
}