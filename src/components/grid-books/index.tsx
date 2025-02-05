import { GridBooksProps } from './types'

export default function GridBooks({ children }: GridBooksProps) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{children}</div>
}
