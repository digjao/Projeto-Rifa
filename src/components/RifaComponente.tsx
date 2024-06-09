import React from 'react';
import ItemComponente from './ItemComponente';

interface rifasInfo {
  rifa_id: number;
  nome: string;
  descricao: string;
  status: string;
  preco_bilhete: number;
  quant_bilhetes: number;
  quant_comprados: number;
  quant_restantes: number;
  image_url: string;
}

interface RifaComponenteProps {
  rifas: rifasInfo[];
}

const RifaComponente: React.FC<RifaComponenteProps> = ({ rifas }) => {
  return (
    <div className="flex flex-wrap">
      {rifas.map((rifa) => (
        <ItemComponente key={rifa.rifa_id} rifas={rifa} />
      ))}
    </div>
  );
};

export default RifaComponente;
