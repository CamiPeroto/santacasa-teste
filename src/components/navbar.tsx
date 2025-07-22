'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleCreateAccount = () => {
    router.push('/account/create');
  };

  return (
    <nav className="bg-nav shadow-md sticky top-0 z-50 px-4 md:px-16">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo santa casa"
            width={84}
            height={84}
          />
        </div>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 font-bold hover:text-black">
            Início
          </Link>
          <Link href="/" className="text-gray-700 font-bold hover:text-black">
            Sobre
          </Link>
        </div>

        <div className="flex items-center gap-2">
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
        <div className="md:hidden flex flex-col gap-4 mt-2">
          <Link href="/" onClick={() => setOpen(false)}>
            Início
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Sobre
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}
