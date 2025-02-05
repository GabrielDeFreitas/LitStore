import { Book } from 'lucide-react'

export default function NavbarBrand() {
  return (
    <div className="flex items-center">
      <Book className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">LitStore</span>
    </div>
  )
}
