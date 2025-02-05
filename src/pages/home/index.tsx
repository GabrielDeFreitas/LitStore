import { SectionTitle } from '../../components/section-title'
import { Banner } from '../../components/banner'
import { BookCard } from '../../components/book-card'
import { Footer } from '../../components/footer'
import { Star } from 'lucide-react'
import SectionWrapper from '../../components/section-wrapper'
import Navbar from '../../components/navbar/Navbar'
import GridBooks from '../../components/grid-books'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Banner.Root>
        <Banner.Header
          title="Discover Your Next Great Read"
          description={'Explore thousands of books from contemporary to classics'}
        />
      </Banner.Root>

      <SectionWrapper>
        <SectionTitle.Root>
          <SectionTitle.Icon icon={Star} />
          <SectionTitle.Header title="New Releases" />
        </SectionTitle.Root>

        <GridBooks>
          {Array.from({ length: 4 }, (_, index) => (
            <BookCard.Root key={index}>
              <BookCard.Cover image="" alt="" />
              <BookCard.Content title="book title" author="author">
                <BookCard.Price price="22.22" />
                <BookCard.Button text="add to cart" />
              </BookCard.Content>
            </BookCard.Root>
          ))}
        </GridBooks>
      </SectionWrapper>

      <Footer.Root>
        <Footer.About
          title="About BookHaven"
          description="Your premier destination for discovering amazing books and expanding your literary horizons."
        />
        <Footer.Links />
        <Footer.Newsletter />
      </Footer.Root>
    </div>
  )
}
