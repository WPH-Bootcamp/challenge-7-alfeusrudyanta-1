type BankDataProps = {
  display: string;
  image: string;
  value: string;
};

export const BANK_DATA: BankDataProps[] = [
  {
    display: 'Bank Negara Indonesia',
    value: 'bni',
    image: '/icons/checkout-bank-logo-1.svg',
  },
  {
    display: 'Bank Rakyat Indonesia',
    value: 'bri',
    image: '/icons/checkout-bank-logo-2.svg',
  },
  {
    display: 'Bank Central Asia',
    value: 'bca',
    image: '/icons/checkout-bank-logo-3.svg',
  },
  {
    display: 'Bank Mandiri',
    value: 'mandiri',
    image: '/icons/checkout-bank-logo-4.svg',
  },
];
