export function subscribePrice(
  start: number,
  cb: (price: number) => void
) {
  let price = start

  const id = setInterval(() => {
    const delta = (Math.random() - 0.5) * 5
    price = +(price + delta).toFixed(2)
    cb(price)
  }, 1200)

  return () => clearInterval(id)
}
