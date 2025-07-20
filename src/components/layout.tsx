import { Button } from "./ui/button";
import Image from "next/image";

export default function Layout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-start md:min-h-screen px-4 md:px-16 py-8 gap-4 md:gap-8">
      {/* Left Column */}
      <div className="md:flex flex-col justify-between bg-background md:ms-15 md:mt-5">
        <div className="mb-6 md:mb-10">
          <h1 className="text-4xl text-center md:text-[4rem] font-bold text-primary mb-4 max-w-xl tracking-wider break-words">
            Santa Casa de Ponta-Grossa:
          </h1>
          <p className="text-2xl md:text-5xl font-semibold text-center md:text-center md:ms-12 text-gray-600 mb-6 max-w-md leading-tight">
            Conheça a Maior e Melhor Estrutura Hospitalar da Região
          </p>
          <div className="flex justify-center md:justify-end max-w-[22rem]">
            <Button size="lg" className="px-11 py-6">
              Crie Sua Conta
            </Button>
          </div>
        </div>
        <p className=" mx-4 text-center md:text-base text-secondary max-w-md">
          Crie sua conta para agendar consultas e exames com médicos especialistas.
        </p>
      </div>

      {/* Right Column (Image) */}
      <div className="relative h-[300px] md:h-[580px] md:w-xl rounded-xl overflow-hidden">
        <Image
          src="/images/bg-santacasa.jpg"
          alt="Imagem Santa Casa"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
