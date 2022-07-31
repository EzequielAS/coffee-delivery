export function formatPrice(value: number) {
  return new Intl.NumberFormat('pt-BR', { 
    minimumFractionDigits: 2,
    currency: 'BRL',
    style: 'currency'
  }).format(value)
}