import { ReactNode } from 'react'

interface BookCardContentProps {
  children: ReactNode
  title: string
  author: string
}

export default function BookCardContent({ children, title, author }: BookCardContentProps) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600"> {author}</p>
      <div className="mt-4 flex items-center justify-between">{children}</div>
    </div>
  )
}
