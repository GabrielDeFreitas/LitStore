import { Search } from 'lucide-react'

export default function NavbarMobileMenu() {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <div className="p-2">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
