import FavoriteDrops from '../favorites/[id]/components/favorite-drops'

export default function FavorisPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Mes Drops Favoris</h1>
            <FavoriteDrops />
        </div>
    )
}

