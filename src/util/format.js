import Numeral from 'numeraljs';

export function formatPrice(price) {
  const formattedPrice = Numeral(price).format('$0.00');

  return formattedPrice;
}
