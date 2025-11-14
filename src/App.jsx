import { useState } from 'react'
import { Camera, Users, ShoppingCart, Sparkles, MessageCircle, Shapes, Shield, PlayCircle } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-white text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{desc}</p>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wide text-zinc-400">{label}</div>
    </div>
  )
}

function ShowcaseCard({ title, tag, img }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
      <div className="aspect-[4/3] w-full bg-zinc-800/50" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      <div className="p-4">
        <span className="text-[10px] uppercase tracking-wider text-zinc-400">{tag}</span>
        <h4 className="mt-1 text-white font-medium">{title}</h4>
      </div>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-zinc-200">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="text-white font-semibold tracking-tight">pylex</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#cta" className="hover:text-white">Get access</a>
            <a href="/test" className="text-zinc-400 hover:text-white">System check</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10">
            <ShoppingCart className="h-4 w-4" /> Cart
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
                Next‑gen fashion shopping
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
                Shop Amazon finds with a premium experience
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-300">
                Pylex brings a sophisticated interface, virtual tryouts, social recommendations, and collaborative carts to the products you already love.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-zinc-100">
                  Get early access
                </a>
                <a href="#showcase" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-5 py-3 font-medium text-white hover:bg-white/[0.12]">
                  <PlayCircle className="mr-2 h-5 w-5" /> See it in action
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
                <Stat label="Curated items" value="50k+" />
                <Stat label="Friends recs" value="Real‑time" />
                <Stat label="Tryout ready" value="AR/3D" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-indigo-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
                  <div className="aspect-[4/5] w-full bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent">
                    <div>
                      <p className="text-sm text-zinc-300">Featured look</p>
                      <p className="text-white font-medium">Minimal streetwear kit</p>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">
                      <Camera className="h-4 w-4" /> Virtual tryout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything you expect, elevated</h2>
            <p className="mt-3 text-zinc-400">Seamless shopping powered by social context and immersive previews.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Feature icon={Shapes} title="Refined Amazon catalog" desc="Browse Amazon items with a sleek, distraction‑free interface designed for speed and clarity." />
            <Feature icon={Camera} title="Virtual tryout" desc="Preview fits with AR and 3D overlays. Understand drape, color, and proportions before you buy." />
            <Feature icon={Users} title="Friend recommendations" desc="An Instagram‑style feed shows what friends are trying, liking, and wearing in real time." />
            <Feature icon={MessageCircle} title="Chat & combined carts" desc="Plan outfits together, chat in‑app, and check out as a group with shared carts." />
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section id="showcase" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Curations that feel personal</h3>
              <p className="mt-2 text-zinc-400">Clean cards, strong imagery, and useful context. Zero clutter.</p>
            </div>
            <a href="#" className="hidden sm:inline-flex rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white hover:bg-white/[0.12]">Explore collection</a>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ShowcaseCard title="Layered monochrome" tag="Editors’ pick" img="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1640&auto=format&fit=crop" />
            <ShowcaseCard title="Weekend athleisure" tag="Trending" img="https://images.unsplash.com/photo-1490481651947-1485a2aa5d9b?q=80&w=1640&auto=format&fit=crop" />
            <ShowcaseCard title="Minimal outdoor" tag="Friends like this" img="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1640&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm text-zinc-400">Step 1</div>
              <h4 className="mt-1 text-white font-medium">Connect your Amazon account</h4>
              <p className="mt-2 text-zinc-400 text-sm">We mirror products and keep pricing in sync. You get the same selection with a better interface.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm text-zinc-400">Step 2</div>
              <h4 className="mt-1 text-white font-medium">Try on and get recs</h4>
              <p className="mt-2 text-zinc-400 text-sm">Use virtual tryout to visualize fit, then see what friends recommend and wear.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm text-zinc-400">Step 3</div>
              <h4 className="mt-1 text-white font-medium">Chat and checkout together</h4>
              <p className="mt-2 text-zinc-400 text-sm">Create shared carts, split items, and finalize purchases in a single, coordinated flow.</p>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <div className="flex items-center gap-2 text-zinc-300">
                <Shield className="h-4 w-4 text-emerald-400" />
                Privacy & security
              </div>
              <p className="mt-2 text-sm text-zinc-400">Your data stays protected. We only request what’s needed to deliver the experience, and you’re always in control.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6">
              <div className="flex items-center gap-2 text-zinc-300">
                <Sparkles className="h-4 w-4 text-fuchsia-400" />
                Built for performance
              </div>
              <p className="mt-2 text-sm text-zinc-400">Fast interactions, crisp visuals, and a refined dark theme that lets products shine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-fuchsia-500/15 via-violet-500/10 to-indigo-500/10 p-8 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Be first to try Pylex</h3>
              <p className="mt-3 text-zinc-300">Join the waitlist for early access to virtual tryouts, social recs, and collaborative carts.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full sm:w-80 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                />
                <button type="button" className="rounded-lg bg-white px-5 py-3 font-medium text-black hover:bg-zinc-100">
                  Join waitlist
                </button>
              </form>
              <p className="mt-3 text-xs text-zinc-400">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Pylex Clothing</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
