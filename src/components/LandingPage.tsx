import ItemComponente from "./ItemComponente"
import NavBar from "./NavBar";
import { rifasInfo } from "../Interfaces/rifasInfo";



const rifas:rifasInfo[] = [
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
  },
  {
    rifa_id: 2,
    nome: 'Rifa 2',
    descricao: 'Descrição da Rifa 2',
    status: 'Cancelada',
    preco_bilhete: 20,
    quant_bilhetes: 200,
    quant_comprados: 100,
    quant_restantes: 100,
    image_url: 'url_da_imagem_2',
  },
  {
    rifa_id: 3,
    nome: 'Rifa 3',
    descricao: 'Descrição da Rifa 3',
    status: 'Encerrada',
    preco_bilhete: 30,
    quant_bilhetes: 300,
    quant_comprados: 300,
    quant_restantes: 0,
    image_url: 'url_da_imagem_3',
  },
];

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <div className="w-[1600px] flex justify-end mt-5 mg">
            <button className="border-2 border-black rounded-sg text-4xl p-2 rounded-[50px] mb-5">Ordenar por</button>
          </div>
        </div>
        <div className="flex items-center justify-evenly bg-[#D9D9D9] rounded-lg p-5 border-2 border-black w-[1600px] min-h-[800px]">
          <div className="flex flex-wrap">
              {rifas.map((rifa) => (
                <ItemComponente key={rifa.rifa_id} rifas={rifa} />
                 ))}
          </div>
        </div>
      </div>
    </div>
  );
}
