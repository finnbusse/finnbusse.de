import Link from "next/link";

import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-14 items-center gap-6">
          <Link href="/portfolio" className="font-medium">
            Portfolio
          </Link>
          <Link href="/portfolio/projects">Projekte</Link>
          <Link href="/portfolio/about">Über mich</Link>
          <Link href="/portfolio/contact">Kontakt</Link>
        </nav>
      </Container>
    </header>
  );
}
