export const getProducts = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart", {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export const calculatePercentage = (oldPrice: number, price: number): number => {
  if (parseFloat(`${oldPrice}`) === 0 || parseFloat(`${price}`) === 0) {
    return 0;
  }
  return (100 - (price / oldPrice) * 100).toFixed(0) as unknown as number;
};
