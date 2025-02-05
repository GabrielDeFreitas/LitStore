import { ReactNode } from 'react'

export interface BannerRootProps {
  children: ReactNode
}

export interface BannerHeaderProps {
  title: string
  description?: string | ReadonlyArray<string>
}
