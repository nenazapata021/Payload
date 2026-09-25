import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'
import Link from 'next/link'

const queryPijamaPage = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1,
    pagination: false,
    overrideAccess: false,
    where: {
      slug: { equals: 'pijama-1' },
    },
  })
  return result.docs?.[0] as RequiredDataFromCollectionSlug<'pages'> | null
})

export default async function HomePage() {
  const pijamaPage = await queryPijamaPage()

  // Aquí podrías hacer un fetch a tu API de Payload para traer los productos reales más adelante
  const pijamasEjemplo = [
    { id: 1, name: 'Camiseta Goku', price: '$45.00', image: '/camisetas/camiseta-1.jpg' },
    { id: 2, name: 'Camiseta De Los Equipos', price: '$35.00', image: '/camisetas/camiseta-2.jpg' },
    { id: 3, name: 'Camiseta Super Heroes', price: '$55.00', image: '/camisetas/camiseta-3.jpg' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Sección Hero / Banner Principal */}
      <section className="relative bg-pink-100 py-20 px-6 text-center rounded-b-3xl shadow-sm mb-12">
        <div className="max-w-3xl mx-auto">
          <span className="bg-pink-200 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Nueva Colección 
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
            Luce bien con nuestras camisetas
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Descubre nuestra exclusiva línea de camisetas diseñadas para tus momentos parchados.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#catalogo" 
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all"
            >
              Ver Catálogo
            </a>
            <a 
              href="/admin" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-full shadow-sm border border-gray-200 transition-all"
            >
              Panel Admin
            </a>
          </div>
        </div>
      </section>

      {/* Página pijama-1 desde Payload */}
      {pijamaPage && (
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{pijamaPage.title}</h2>
          {pijamaPage.hero && (
            <div className="prose prose-pink max-w-none">
              {/* Render hero content if needed */}
            </div>
          )}
        </section>
      )}

      {/* Sección del Catálogo de Productos */}
      <main id="catalogo" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Pijas Destacadas</h2>
          <span className="text-sm text-pink-600 font-semibold cursor-pointer hover:underline">Ver todo &rarr;</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pijamasEjemplo.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-200 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
                <p className="text-pink-600 font-bold text-xl mb-4">{product.price}</p>
                <button className="w-full bg-gray-900 hover:bg-pink-600 text-white py-2.5 rounded-xl font-medium transition-colors">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
          
          {/* Link a la página pijama-1 si existe */}
          {pijamaPage && (
            <Link 
              href={`/${pijamaPage.slug}`}
              className="col-span-full bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow p-8 text-center"
            >
              <h3 className="font-semibold text-xl text-gray-900 mb-2">{pijamaPage.title}</h3>
              <p className="text-gray-600 mb-4">Ver más detalles sobre esta colección</p>
              <span className="text-pink-600 font-medium hover:underline">Ir a la página →</span>
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}