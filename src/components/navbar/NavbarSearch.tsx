import { Search } from 'lucide-react'

export default function NavbarSearch() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search books..."
        className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  )
}
