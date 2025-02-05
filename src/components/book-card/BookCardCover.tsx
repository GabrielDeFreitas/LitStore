import { ImgHTMLAttributes } from 'react'

interface BookCardCoverProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: string
  alt: string
}

export default function BookCardCover({ image, alt, ...rest }: BookCardCoverProps) {
  return <img {...rest} src={image} alt={alt} className="w-full h-48 object-cover" />
}
