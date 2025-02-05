interface FooterAboutProps {
  title: string
  description: string
}

export default function FooterAbout({ title, description }: FooterAboutProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
