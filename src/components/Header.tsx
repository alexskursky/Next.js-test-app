import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800/75 text-white p-4 rounded-xl backdrop-blur-md shadow-md fixed w-full top-0 z-10">
      <nav className="flex justify-between container mx-auto items-center">
        <Link href="/" className="font-bold text-2xl hover:text-gray-400">
          My App
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contacts</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
