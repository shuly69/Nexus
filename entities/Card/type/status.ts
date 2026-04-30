
export type CardStatus = "sale" | "new" | "stock" | "best_seller" | "hot" | "limited_time_offer";

export const PHONE_STATUS_COLORS: Record<CardStatus, string> = {
  hot: "bg-red-500 text-white",
  best_seller: "bg-green-500 text-white",
  new: "bg-blue-500 text-white",
  sale: "bg-orange-500 text-white",
  limited_time_offer: "bg-purple-500 text-white",
  stock: "bg-gray-500 text-white",
};

export const PHONE_STATUS_LABELS: Record<CardStatus, string> = {
  hot: "Hot",
  best_seller: "Best Value",
  new: "New",
  sale: "Sale",
  limited_time_offer: "Limited",
  stock: "In Stock",
};


export type CardStatusDeal = "save" | "off" | "bundle" | "limited_time_offer" | "best_seller";
export const DEAL_STATUS_COLORS: Record<CardStatusDeal, string> = {
  save: "bg-[#FEE2E2] text-[#DC2626]",
  off: "bg-[#FFEDD5] text-[#EA580C]",
  bundle: "bg-blue-500 text-white",
  limited_time_offer: "bg-[#F3E8FF] text-[#9333EA]",
  best_seller: "bg-[#FEE2E2] text-[#DC2626]"
};
export const DEAL_STATUS_LABELS: Record<CardStatusDeal, string> = {
  save: "Save 200$",
  off: "25% OFF",
  bundle: "Bundle Deal",
  limited_time_offer: "Limited Time",
  best_seller: "Best Sellers"
};