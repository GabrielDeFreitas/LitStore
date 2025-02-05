import { SectionTitleRootProps } from './types'

export function SectionTitleRoot({ children }: SectionTitleRootProps) {
  return <div className="flex items-center gap-2 mb-6">{children}</div>
}
