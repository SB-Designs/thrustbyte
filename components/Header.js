import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="/">
        <a className="block w-12 h-12 mx-auto mb-4 rounded-full overflow-hidden relative" aria-label={`${name} home`}>
          <Image
            src="https://s1.qwant.com/thumbr/474x474/9/f/f06b292353af9e001f0415365f61f368118484107b5205dae3992bb0d80c79/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.XiBfzPtRlG99W70e7sdnHwHaHa%26pid%3DApi&q=0&b=1&p=0&a=0" // 👈 replace with your image path or URL
            alt={`${name} logo`}
            layout="fill" // makes the image fill the container
            className="object-cover"
          />
        </a>
      </Link>
    </header>
  );
}
