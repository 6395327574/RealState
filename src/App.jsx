import React, {useState} from 'react'
import clsx from 'clsx'

const sampleProperties = Array.from({length:8}).map((_,i)=>({
  id: i+1,
  title: `2 BHK Apartment ${i+1}`,
  city: ['Delhi','Gurgaon','Noida','Mumbai'][i%4],
  price: `${8 + i}k / month`,
  img: `https://picsum.photos/seed/prop${i+1}/600/400`
}))

function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white header-shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold">NB</div>
          <div className="font-semibold text-lg">NoBroker<span className="text-gray-400">-inspired</span></div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a className="hover:text-primary" href="#">Rent</a>
          <a className="hover:text-primary" href="#">Buy</a>
          <a className="hover:text-primary" href="#">Sell</a>
          <a className="hover:text-primary" href="#">Post Property</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-block px-4 py-2 rounded-md border">Login</button>
          <button className="px-4 py-2 rounded-md bg-primary text-white">Sign up</button>
        </div>
      </div>
    </header>
  )
}

function Hero({onSearch}){
  const [query,setQuery] = useState('')
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find the perfect rental — without brokerage</h1>
            <p className="text-gray-600 mb-6">Search verified listings, connect directly with owners and save on brokerage fees.</p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex gap-2">
                <input value={query} onChange={e=>setQuery(e.target.value)} className="flex-1 p-3 outline-none" placeholder="Search locality, city, or project" />
                <button onClick={()=>onSearch(query)} className="px-4 py-3 rounded-md bg-primary text-white">Search</button>
              </div>
              <div className="mt-3 text-xs text-gray-500">Try: "Greater Kailash", "Sector 14 Noida", "Bandra"</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-gray-700">
              <div className="p-3 bg-white rounded-md shadow-sm">Verified Properties</div>
              <div className="p-3 bg-white rounded-md shadow-sm">No Brokerage</div>
              <div className="p-3 bg-white rounded-md shadow-sm">Schedule Visits</div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1560185127-6a1c6f9f0d4b?auto=format&fit=crop&w=900&q=60" alt="home" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Features(){
  const items = [
    {title:'List for free', desc:'Owners can list without paying brokerage.'},
    {title:'Verified listings', desc:'Listings verified by our team.'},
    {title:'Schedule visits', desc:'Book visits directly with owners.'},
    {title:'Rental agreements', desc:'Download legal agreements.'}
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it,i)=>(
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm text-center">
            <div className="text-xl font-semibold mb-2">{it.title}</div>
            <div className="text-sm text-gray-600">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function PropertyCard({p}){
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{p.title}</div>
          <div className="text-sm text-gray-500">{p.city}</div>
        </div>
        <div className="mt-2 text-primary font-semibold">{p.price}</div>
        <div className="mt-3 flex items-center gap-2">
          <button className="px-3 py-1 rounded-md border text-sm">Contact Owner</button>
          <button className="px-3 py-1 rounded-md bg-primary text-white text-sm">Book Visit</button>
        </div>
      </div>
    </div>
  )
}

function PropertiesGrid({list}){
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Top listings</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map(p=> <PropertyCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-4">
        <div>
          <div className="font-semibold mb-2">NoBroker-inspired</div>
          <div>Build an awesome rental product.</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <div>About • Careers • Blog</div>
        </div>
        <div>
          <div className="font-semibold mb-2">Support</div>
          <div>Contact • FAQ • Terms</div>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const [list, setList] = useState(sampleProperties)
  function handleSearch(q){
    if(!q) return setList(sampleProperties)
    const lowered = q.toLowerCase()
    setList(sampleProperties.filter(p=> p.title.toLowerCase().includes(lowered) || p.city.toLowerCase().includes(lowered)))
  }
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero onSearch={handleSearch} />
        <Features />
        <PropertiesGrid list={list} />
      </main>
      <Footer />
    </div>
  )
}