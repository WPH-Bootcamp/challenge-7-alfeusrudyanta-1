type CategoryCardProps = {
  name: string;
  image: string;
};

const CATEGORY_CARDS: CategoryCardProps[] = [
  {
    name: 'All Restaurant',
    image: '/icons/home-all-food.svg',
  },
  {
    name: 'Nearby',
    image: '/icons/home-location.svg',
  },
  {
    name: 'Discount',
    image: '/icons/home-discount.svg',
  },
  {
    name: 'Best Seller',
    image: '/icons/home-best-seller.svg',
  },
  {
    name: 'Delivery',
    image: '/icons/home-delivery.svg',
  },
  {
    name: 'Lunch',
    image: '/icons/home-lunch.svg',
  },
];

export { CATEGORY_CARDS, type CategoryCardProps };
