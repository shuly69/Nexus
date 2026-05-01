import { z } from "zod";


const imageFileSchema = z.preprocess((value) => {
  if (value instanceof FileList) {
    return value.item(0) ?? undefined;
  }
  return value;
},
  z.instanceof(File, { message: "Image file is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Image must be less than 5MB",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      { message: "Only JPG, PNG or WEBP images are allowed" }
    )
);


const colorSchema = z.object({
  name: z.string().min(1, { message: "Color name is required" }),
  stock: z.number().int().nonnegative({ message: "Stock must be >= 0" }),
  id: z.string().optional(),
});


const variantSchema = z.object({
  capacity: z.string().min(1, { message: "Capacity is required" }),
  colors: z.array(colorSchema).min(1, { message: "At least one color is required" }),
});

const specsSchema = z.object({
  display: z.string().min(1, { message: "Display is required" }),
  battery: z.string().min(1, { message: "Battery is required" }),
  camera: z.string().min(1, { message: "Camera is required" }),
  processor: z.string().min(1, { message: "CPU is required" }),
});

export const phoneFormSchema = z.object({
  brand: z.string().min(1, { message: "Brand is required" }),
  model: z.string().min(1, { message: "Model is required" }),

  imageUrl: z.string().url().optional(), 

  price: z.preprocess((v) => Number(v), z.number().positive({
    message: "Price must be greater than zero",
  })),

  variants: z.array(variantSchema).min(1, { message: "At least one variant is required" }),

  specs: specsSchema,

  description: z.string().min(1, { message: "Description is required" }),

  features: z
    .array(z.string().min(1, { message: "Feature cannot be empty" }))
    .min(1, { message: "At least one feature is required" }),

  fullName: z.string().optional(),
  status: z.enum(["limited_time_offer", "best_seller", "new_arrival"]).optional(),
  createdAt: z.string().optional(),
});