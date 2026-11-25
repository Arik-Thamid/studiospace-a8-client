import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p className="max-w-sm">StudioSpace helps creators find and book studios, and helps hosts share their spaces.</p>
        <Link href="/studios" className="hover:text-ink">Explore studios</Link>
        <p>&copy; 2026 StudioSpace. Academic project.</p>
      </div>
    </footer>
  );
}
