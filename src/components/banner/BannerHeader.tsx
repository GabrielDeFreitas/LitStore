import { BannerHeaderProps } from './types'

export function BannerHeader({ title, description }: BannerHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">{title}</h1>
      <p className="mt-4 text-xl text-indigo-200">{description}</p>
    </div>
  )
}
