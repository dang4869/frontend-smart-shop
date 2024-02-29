interface IProduct {
  id: string;
  product_name: string;
  slug: string;
  price: number;
  thumbnail: string;
  product_desc: string;
  product_detail: string;
  category_product_id: number;
  status: number;
  category_parent: number;
  updated_at: string;
  created_at: string;
  category_product: {
    id: string;
    category_name: string;
    slug: string;
    category_parent: number;
    updated_at: string;
    created_at: string;
  };
}
