import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div className="flex items-start">
          <Image src="/images/logo-footer.png" alt="Filantrópica" width={120} height={120} />
        </div>

        <div>
          <h3 className="font-bold mb-2">Endereço:</h3>
          <p>Av. Doutor Francisco Burzio, 774</p>
          <p>Centro - 84010-200 Ponta Grossa - PR</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contato:</h3>
          <p>+55 (42) 3026-8000</p>
          <p>sec@santacasapg.com</p>

          <div className="flex gap-4 mt-4">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center mx-8">
        <p className="text-center">© 2025 Camila Peroto. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="#" className="hover:underline">
            Política de Privacidade
          </Link>
          <Link href="#" className="hover:underline">
            Termos de Serviço
          </Link>
        </div>
      </div>
    </footer>
  );
}
