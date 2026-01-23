type InfiniteReq = {
  page: number;
  limit: number;
};

type getRestCategory = {
  location: string | null;
  range: number | null;
  priceMin: number | null;
  priceMax: number | null;
  rating: number | null;
  category: string | null;
};

type getRestCategoryReq = InfiniteReq & getRestCategory;

type PriceRange = {
  min: number;
  max: number;
};

type Restaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;
  priceRange: PriceRange;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

type Filters = {
  range: number | null;
  priceMin: number | null;
  priceMax: number | null;
  rating: number | null;
  category: string | null;
};

type getRestCategoryRes = {
  success: boolean;
  message: string;
  data: {
    restaurants: Restaurant[];
    pagination: Pagination;
    filters: Filters;
  };
};

export type { getRestCategory, getRestCategoryReq, getRestCategoryRes };
