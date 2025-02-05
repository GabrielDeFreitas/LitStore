import { ReactNode } from 'react'

interface BookCardRootProps {
  children: ReactNode
}

export default function BookCardRoot({ children }: BookCardRootProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {children}
    </div>
  )
}
