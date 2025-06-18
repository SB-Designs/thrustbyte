import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
        <a className="block w-[800px] h-auto mx-auto mb-6" aria-label={`${name} home`}>
          <Image
            src="https://trackle.pages.dev/assets/logo.png // 👈 Replace with your image path
            alt={`${name} logo`}
            width={800}
            height={800} // Adjust height for your logo aspect ratio
            className="object-contain"
          />
        </a>
      </Link>
    </header>
  );
}
