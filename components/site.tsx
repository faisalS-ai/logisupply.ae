import Link from "next/link";

export function Header() {
  return <header className="site-header"><div className="shell nav"><Link className="brand" href="/" aria-label="LogiSupply.ae home"><span className="brand-mark" aria-hidden="true">↗</span>Logi<i>Supply</i><small>.ae</small></Link><nav aria-label="Main navigation"><Link href="/marketplace">Logistics Supplies</Link><Link href="/apps">Logistics Applications</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></nav><div className="nav-actions"><Link className="login-link" href="/login">Log in</Link><Link className="button nav-button" href="/register">Start free <span aria-hidden="true">↗</span></Link></div></div><nav className="mobile-nav shell" aria-label="Mobile navigation"><Link href="/marketplace">Logistics Supplies</Link><Link href="/apps">Logistics Applications</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></nav></header>;
}
export function Footer() {
  return <footer className="shell footer"><Link className="brand footer-brand" href="/">Logi<i>Supply</i><small>.ae</small></Link><span>© 2026 LogiSupply.ae</span><div><Link href="/legal/privacy">Privacy</Link><Link href="/legal/terms">Terms</Link><Link href="/legal/refunds">Refunds & cancellation</Link></div></footer>;
}
