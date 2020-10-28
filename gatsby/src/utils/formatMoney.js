const formatter = Intl.NumberFormat('fr-EU', {
  style: 'currency',
  currency: 'EUR',
});

export function formatMoney(cents) {
  return formatter.format(cents / 100);
}
