import { z } from "zod";


export const VariantColorSchema = z.object({
  id: z.string().optional(),

  name: z
    .string()
    .min(1, { message: "Color name is required" }),

  stock: z
    .number().int({ message: "Stock must be an integer" })

    .int({ message: "Stock must be an integer" })
    .nonnegative({ message: "Stock cannot be negative" }),
});


export const variantSchema = z.object({
  capacity: z
    .string()
    .min(1, { message: "Capacity is required" }),

  colors: z
    .array(VariantColorSchema)
    .min(1, { message: "At least one color is required" }),
});




export const productSpecsSchema = z.object({
  display: z.string().min(1, { message: "Screen is required" }),
  battery: z.string().min(1, { message: "Battery is required" }),
  camera: z.string().min(1, { message: "Camera is required" }),
  processor: z.string().min(1, { message: "CPU is required" }),
});



export const cardPhoneSchema = z.object({
  id: z.number(),
  brand: z
    .string()
    .min(1, { message: "Brand is required" }),

  model: z
    .string()
    .min(1, { message: "Model is required" }),

  imageUrl: z.string().url(),



  price: z.preprocess(
  (v) => Number(v),
  z.number().positive({ message: "Price must be greater than zero" })
),



  variants: z
    .array(variantSchema)
    .min(1, { message: "At least one variant is required" }),

  specs: productSpecsSchema,

  description: z
    .string()
    .min(1, { message: "Description is required" }),

  features: z
    .array(z.string().min(1, { message: "Feature cannot be empty" }))
    .min(1, { message: "At least one feature is required" }),

  fullName: z.string().optional(),
  status: z.enum(["limited_time_offer", "best_seller", "new_arrival"]).optional(),
  slug: z.string().optional(),
  createdAt: z.string().optional(),
});
