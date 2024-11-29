import AuctionsList from '../auctions/[id]/components/auctions-list'
import Filters from '../auctions/[id]/components/filters'
import Chat from '../auctions/[id]/components/chat'

export default function AuctionsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Drop the Street - Enchères en Direct</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-3/4">
                    <Filters />
                    <AuctionsList />
                </div>
                <div className="lg:w-1/4">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

