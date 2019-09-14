import Numeral from 'numeraljs';
import 'numeraljs/languages/pt-br';

export function formatPrice(price) {
  const formattedPrice = Numeral(price).format('$0.00');

  return formattedPrice;
}
