import { SectionTitleHeaderProps } from './types'

export function SectionTitleHeader({ title }: SectionTitleHeaderProps) {
  return <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
}
