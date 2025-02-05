import { ReactNode } from 'react'

interface FooterRootProps {
  children: ReactNode
}

export default function FooterRoot({ children }: FooterRootProps) {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{children}</div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 LitStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
