export default function FooterNewsletter() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-400 mb-4">Subscribe to get updates on new releases and special offers.</p>
      <div className="flex">
        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900" />
        <button className="px-4 py-2 bg-indigo-600 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
          Subscribe
        </button>
      </div>
    </div>
  )
}
