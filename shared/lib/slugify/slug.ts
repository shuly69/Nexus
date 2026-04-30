import slugifyLib from "slugify";

export const slugify = (value: string): string => {
  return slugifyLib(value, {
    lower: true,
    strict: true,
    trim: true,
  });
};

