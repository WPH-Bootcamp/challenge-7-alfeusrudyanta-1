export type BestRestoReqParams = {
  page: number;
  limit: number;
};

export type SearchRestoReqParams = BestRestoReqParams & {
  q: string;
};

export type PriceRange = {
  min: number;
  max: number;
};

export type Restaurant = {
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

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type RestaurantResponse = {
  success: boolean;
  message: string;
  data: {
    restaurants: Restaurant[];
    pagination: Pagination;
    searchQuery?: string;
  };
};
