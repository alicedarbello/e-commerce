import {Accessories} from "../types";

interface ResponseAccessories {
  data: Accessories[];
  total: number;
}

export async function fetchAllAccessories(
  params: {
    q?: string;
    maxPrice?: number;
    onSale?: boolean;
    page?: number;
    limit?: number;
  } = {},
) {
  const {q, maxPrice, onSale, page = 1, limit = 20} = params;

  let query = `http://127.0.0.1:8000/accessories?page=${page}&limit=${limit}`;

  if (q) {
    query += `&q=${q}`;
  }
  if (maxPrice) {
    query += `&max_price=${maxPrice}`;
  }
  if (onSale) {
    query += `&on_sale=true`;
  }

  return fetch(query).then((res) => res.json()) as unknown as Promise<ResponseAccessories>;
}

export async function fetchAccessoryById(productId: number) {
  return fetch(`http://127.0.0.1:8000/accessories/${productId}`).then((res) => {
    if (res.status === 404) {
      return null;
    }

    return res.json();
  }) as unknown as Promise<Accessories | null>;
}
