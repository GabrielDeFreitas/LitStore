import { SectionWrapperProps } from './types'

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">{children}</section>
    </div>
  )
}
