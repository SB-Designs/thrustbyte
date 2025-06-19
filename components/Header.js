import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-12 pb-8">
      <Link href="/">
        <a>
          <img
            src="/images/thrustbyte.png"
            alt={`${name} logo`}
            width={250}
            height={103}
            className="mx-auto mb-4"
          />
        </a>
      </Link>
    </header>
  );
}
