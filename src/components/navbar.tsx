'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleCreateAccount = () => {
    router.push('/account/create');
  };

  return (
    <nav className="bg-nav shadow-md sticky top-0 z-50">
      <div className="grid grid-cols-3 items-center px-4 md:px-16">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo santa casa"
            width={84}
            height={84}
          />
        </div>

        <div className="hidden md:flex justify-center gap-6">
          <Link href="/" className="text-gray-700 font-bold hover:text-black">
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-bold hover:text-black"
          >
            About
          </Link>
        </div>

        <div className="flex justify-end items-center gap-2">
          <div className="hidden md:block">
            <Button size="lg" onClick={handleCreateAccount}>
              Criar Conta
            </Button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-2 px-4">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
