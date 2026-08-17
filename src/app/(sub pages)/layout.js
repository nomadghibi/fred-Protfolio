import Link from "next/link";

export default function SubPagesLayout({ children }) {
  return (
    <div className="sub-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-mark" aria-label="Fred Dehnashi home">
          FD<span>.</span>
        </Link>
        <div className="nav-links">
          <Link href="/#systems">Systems</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact" className="nav-cta">Start a conversation</Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
