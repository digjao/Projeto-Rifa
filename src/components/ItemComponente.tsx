import React from 'react';
import { rifasInfo } from '../Interfaces/rifasInfo';

const ItemComponente: React.FC<{ rifas: rifasInfo }> = ({ rifas }) => {
    return (
        <div className="bg-[#EFEFEF] rounded-lg border drop-shadow-5xl p-2 flex flex-col justify-between items-center">
            <div className="bg-[#EFEFEF] rounded-lg border-2 border-black mt-4 w-[350px] min-h-[250px]">
                <img src={rifas.image_url} alt={rifas.nome} />
            </div>
            <div className="bg-[#EFEFEF] w-[350px] min-h-[250px] flex flex-col items-start justify-evenly">
                <h1 className="font-extrabold text-4xl">{rifas.nome}</h1>
                <h3 className="font-extrabold text-4xl">
                    R$ {rifas.preco_bilhete}
                </h3>
                <h3 className="text-xl">{rifas.descricao}</h3>
                <h3 className="text-xl">{rifas.status}</h3>
            </div>
            <div className="flex">
                {
                    <h1 className="rounded-lg border-2 bg-green-500 border-black mb-4 w-[120px] min-h-[50px] flex items-center justify-center">
                        {rifas.quant_bilhetes}
                    </h1>
                }
                {
                    <h1 className="rounded-lg border-2 bg-[#D9D9D9] border-black mb-4 w-[120px] min-h-[50px] mr-3 ml-3 flex items-center justify-center">
                        {rifas.quant_comprados}
                    </h1>
                }
                {
                    <h1 className="rounded-lg border-2 bg-red-500 border-black mb-4 w-[120px] min-h-[50px] flex items-center justify-center">
                        {rifas.quant_restantes}
                    </h1>
                }
            </div>
        </div>
    );
};

export default ItemComponente;
