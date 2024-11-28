import Header from './components/Header'
import Footer from './components/Footer'
import MainBanner from './components/MainBanner'
import DailyDrops from './components/DailyDrops'
import PopularProducts from './components/PopularProducts'
import LiveAuctions from './components/LiveAuctions'
import CTASection from './components/CTASection'

export default function HomePage() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <MainBanner />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <DailyDrops />
            <PopularProducts />
          </div>
          <LiveAuctions />
          <CTASection />
        </main>
        <Footer />
      </div>
  )
}