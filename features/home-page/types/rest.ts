type BestRestoReqParams = {
  page: number;
  limit: number;
};

type SearchRestoReqParams = BestRestoReqParams & {
  q: string;
};

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

type RestaurantResponse = {
  success: boolean;
  message: string;
  data: {
    restaurants: Restaurant[];
    pagination: Pagination;
    searchQuery?: string;
  };
};

export type { BestRestoReqParams, SearchRestoReqParams, RestaurantResponse };
