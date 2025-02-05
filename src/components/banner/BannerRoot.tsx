import { BannerRootProps } from './types'

export function BannerRoot({ children }: BannerRootProps) {
  return (
    <div className="relative bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">{children}</div>
    </div>
  )
}
