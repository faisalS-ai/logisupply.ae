import Link from "next/link";
import { Footer, Header } from "@/components/site";

const products = [
  { number: "01", title: "Logistics Supplies", description: "Find labels, packaging and warehouse essentials for the work that keeps cargo moving.", label: "Explore supplies", href: "/marketplace", icon: "▦", detail: "LABELS / PACKAGING / WAREHOUSE" },
  { number: "02", title: "Logistics Applications", description: "Bring pricing, operations and essential business tools together in one connected workspace.", label: "Explore applications", href: "/apps", icon: "↗", detail: "PRICING / OPERATIONS / COMPLIANCE" },
] as const;

export default function Home() {
  return <><Header /><main>
    <section className="shell home-hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Built for logistics in the UAE</p>
        <h1>Good logistics<br /><span>moves everything.</span></h1>
        <p className="hero-description">The supplies your operation relies on. The applications your team works with. Together in one place.</p>
        <div className="hero-actions"><Link className="button" href="/marketplace">Explore supplies <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/apps">Explore applications <span aria-hidden="true">→</span></Link></div>
        <div className="hero-note"><span className="note-line" /> Made for the people who keep cargo moving.</div>
      </div>
      <div className="hero-visual" aria-label="Logistics workspace illustration">
        <div className="visual-top"><span>LOGISUPPLY / TWO WAYS TO MOVE</span><span>UAE &nbsp; ●</span></div>
        <div className="visual-grid" aria-hidden="true"><div className="route route-one" /><div className="route route-two" /><div className="route-dot dot-one" /><div className="route-dot dot-two" /><div className="route-dot dot-three" /><div className="visual-center"><span>THE CONNECTED</span><strong>flow of<br /><em>logistics.</em></strong><span>SUPPLIES & APPLICATIONS.</span></div><div className="visual-tag tag-one">01 / SUPPLIES <b>↗</b></div><div className="visual-tag tag-two">02 / APPLICATIONS <b>↗</b></div></div>
        <div className="visual-bottom"><span>DESIGNED FOR THE WAY YOU MOVE</span><span>25° 12′ N &nbsp; 55° 16′ E</span></div>
      </div>
    </section>
    <div className="capability-strip"><div className="shell strip-inner"><span>TWO SIDES OF LOGISTICS</span><span>Logistics Supplies <b>✳</b> Logistics Applications</span><span>BUILT FOR THE UAE ↗</span></div></div>
    <section className="shell home-features"><div className="section-intro"><div><p className="eyebrow">Explore LogiSupply / 01</p><h2>Two ways to<br /><em>keep moving.</em></h2></div><p>Equip your operation and empower your team, with practical products built around the needs of logistics.</p></div>
      <div className="feature-grid product-grid">{products.map((product) => <Link className="feature-card product-card" href={product.href} key={product.number}><div className="feature-top"><span>{product.number} / 02</span><span className="feature-icon" aria-hidden="true">{product.icon}</span></div><div><p className="product-detail">{product.detail}</p><h3>{product.title}</h3><p>{product.description}</p></div><div className="feature-bottom">{product.label}<span aria-hidden="true">↗</span></div></Link>)}</div>
    </section>
    <section className="shell home-cta"><div><p className="eyebrow">A better way forward</p><h2>Let’s move logistics<br /><em>forward, together.</em></h2></div><div><p>Discover the supplies and applications that support your operation.</p><Link className="button" href="/contact">Talk to us <span aria-hidden="true">↗</span></Link></div></section>
  </main><Footer /></>;
}

