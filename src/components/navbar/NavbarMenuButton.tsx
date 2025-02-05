import { Menu, X } from 'lucide-react'

interface NavbarMenuButtonProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export default function NavbarMenuButton({ isMenuOpen, setIsMenuOpen }: NavbarMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  )
}
