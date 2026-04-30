import { CardPhone } from "@/entities/Card/type/model";


export async function createPhone(data: Partial<CardPhone>): Promise<CardPhone> {
  const res = await fetch("/api/phones", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create phone");

  return res.json();
}