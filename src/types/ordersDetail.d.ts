interface IOrderDetail {
  id: number;
  order_id: number;
  product_id: number;
  product_qty: number;
  total: number;
  created_at: string;
  updated_at: string;
  product: {
    id: number;
    product_name: string;
    price: number;
    thumbnail: string;
    product_desc: string;
    product_detail: string;
    category_product_id: number;
    created_at: string;
    updated_at: string;
    slug: string;
    status: number;
    properties: number;
  };
}
