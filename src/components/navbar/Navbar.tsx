import NavbarBrand from './NavbarBrand'
import NavbarSearch from './NavbarSearch'
import NavbarCartButton from './NavbarCartButton'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarMobileMenu from './NavbarMobileMenu'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <NavbarBrand />
          <div className="hidden md:flex items-center space-x-4">
            <NavbarSearch />
            <NavbarCartButton />
          </div>
          <NavbarMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
      {isMenuOpen && <NavbarMobileMenu />}
    </nav>
  )
}
