import React from 'react';
import ItemComponente from './ItemComponente';
import NavBar from './NavBar';
import { rifasInfo } from '../Interfaces/rifasInfo.ts';

const rifas: rifasInfo[] = [
  {
    rifa_id: 1,
    nome: 'Tv 50 polegadas',
    descricao: 'Belissima Tv',
    status: 'Disponível',
    preco_bilhete: 10,
    quant_bilhetes: 100,
    quant_comprados: 50,
    quant_restantes: 50,
    image_url: 'url_da_imagem_1',
  }
];

const numeros = Array.from({ length: 80 }, (_, i) => i + 1);

export const RifaNumeros: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className='flex p-20 justify-evenly'>
        <div className='bg-[#D9D9D9] rounded-lg border-2 border-black p-4 flex items-center justify-center'>
          <div className='grid grid-cols-8 gap-2'>
            {numeros.map((numero) => (
              <button key={numero} className='w-12 h-12 border-2 border-black rounded-full hover:bg-gray-500'>
                {numero}
              </button>
            ))}
          </div>
        </div>
        <div className='flex'>
          {rifas.map((rifa) => (
            <ItemComponente key={rifa.rifa_id} rifas={rifa} />
          ))}
        </div>
      </div>
    </div>
  );
};
