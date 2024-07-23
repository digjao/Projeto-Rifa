import ItemComponente from "../components/ItemComponente"
import NavBar from "../components/NavBar";
import { rifasInfo } from "../Interfaces/RifasInfo";




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




export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="p-4">
        <div className="flex justify-end p-2 mg">
            <button className="border-2 border-black rounded-sg text-4xl p-2 rounded-[50px] mb-5">Ordenar por</button>
        </div>
        <div className="flex flex-wrap items-center justify-evenly bg-[#D9D9D9] rounded-lg border-2 border-black p-20">
          
              {rifas.map((rifa) => (
                <ItemComponente key={rifa.rifa_id} rifas={rifa} />
                 ))}
          
        </div>
      </div>
    </div>
  );
}
