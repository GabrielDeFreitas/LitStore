import { ShoppingCart } from 'lucide-react'

export default function NavbarCartButton() {
  return (
    <button className="p-2 rounded-full hover:bg-gray-100">
      <ShoppingCart className="h-6 w-6 text-gray-600" />
    </button>
  )
}
