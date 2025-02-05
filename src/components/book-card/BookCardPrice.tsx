interface BookCardPriceProps {
  price: string
}

export function BookCardPrice({ price }: BookCardPriceProps) {
  return <span className="text-indigo-600 font-bold"> {price}</span>
}
