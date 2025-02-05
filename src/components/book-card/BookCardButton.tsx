import { ButtonHTMLAttributes } from 'react'

interface BookCardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function BookCardButton({ text, ...rest }: BookCardButtonProps) {
  return (
    <button
      {...rest}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
    >
      {text}
    </button>
  )
}
