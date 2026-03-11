type StatusDataProps = {
  name: 'preparing' | 'on_the_way' | 'delivered' | 'done' | 'cancelled';
  displayName: 'Preparing' | 'On the Way' | 'Delivered' | 'Done' | 'Cancelled';
};

const STATUS_DATA: StatusDataProps[] = [
  { name: 'preparing', displayName: 'Preparing' },
  { name: 'on_the_way', displayName: 'On the Way' },
  { name: 'delivered', displayName: 'Delivered' },
  { name: 'done', displayName: 'Done' },
  { name: 'cancelled', displayName: 'Cancelled' },
];

export { STATUS_DATA };
