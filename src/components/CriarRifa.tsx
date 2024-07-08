import { useState } from "react";
import NavBar from "./NavBar";
import { rifaCreate } from "../Interfaces/rifaCreate";
import { rifaFormulario } from "../services/auth";

export const CriarRifa = () => {
  const [formData, setFormData] = useState<rifaCreate>({
    nome: '',
    descricao: '',
    preco_bilhete: 0,
    premio_nome: '',
    premio_imagem: '',
    data_sorteio: '',
    quant_bilhetes: 0,
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    nome: '',
    descricao: '',
    preco_bilhete: '',
    premio_nome: '',
    data_sorteio: '',
    quant_bilhetes: '',
    premio_imagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(selectedFile.type)) {
        setErrors(prev => ({ ...prev, premio_imagem: 'A imagem deve ser do tipo jpg, jpeg ou png.' }));
        return;
      }
      setFile(selectedFile);
      setErrors(prev => ({ ...prev, premio_imagem: '' }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      nome: '',
      descricao: '',
      preco_bilhete: '',
      premio_nome: '',
      data_sorteio: '',
      quant_bilhetes: '',
      premio_imagem: '',
    };

    if (!formData.nome) {
      newErrors.nome = 'O nome da rifa é obrigatório.';
      valid = false;
    }

    if (!formData.descricao) {
      newErrors.descricao = 'A descrição é obrigatória.';
      valid = false;
    }

    if (formData.preco_bilhete <= 0) {
      newErrors.preco_bilhete = 'O preço do bilhete deve ser maior que zero.';
      valid = false;
    }

    if (!formData.premio_nome) {
      newErrors.premio_nome = 'O nome do prêmio é obrigatório.';
      valid = false;
    }

    if (!formData.data_sorteio) {
      newErrors.data_sorteio = 'A data do sorteio é obrigatória.';
      valid = false;
    }

    if (formData.quant_bilhetes < 10) {
      newErrors.quant_bilhetes = 'A quantidade de bilhetes deve ser pelo menos 10.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const data = new FormData();
    data.append('nome', formData.nome);
    data.append('descricao', formData.descricao);
    data.append('preco_bilhete', formData.preco_bilhete.toString());
    data.append('premio_nome', formData.premio_nome);
    if (file) {
      data.append('premio_imagem', file);
    }
    data.append('data_sorteio', formData.data_sorteio);
    data.append('quant_bilhetes', formData.quant_bilhetes.toString());

    const response = await rifaFormulario(data);
    if (response) {
      alert('Rifa criada com sucesso!');
    } else {
      alert('Erro ao criar rifa.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <h1 className="text-4xl p-4">Minha conta | Crie agora sua rifa</h1>
      <div className="flex flex-wrap p-8">
        <div className="p-2 grow w-full md:w-1/2">
          <form id="enter" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="tituloRifa" className="text-3xl p-2">Título da Rifa</label>
            <input
              name="nome"
              type="text"
              id="tituloRifa"
              className={`border-2 p-2 rounded-3xl mb-4 ${errors.nome ? 'border-red-500' : 'border-black'}`}
              placeholder="Ex: Rifa para ajudar..."
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && <p className="text-red-500">{errors.nome}</p>}

            <label htmlFor="objetivoRifa" className="text-3xl p-2">Informe o objetivo da sua rifa</label>
            <textarea
              name="descricao"
              id="objetivoRifa"
              className={`border-2 p-2 rounded-3xl h-32 mb-4 ${errors.descricao ? 'border-red-500' : 'border-black'}`}
              value={formData.descricao}
              onChange={handleChange}
            />
            {errors.descricao && <p className="text-red-500">{errors.descricao}</p>}

            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/4 p-2">
                <label htmlFor="premioRifa" className="text-2xl p-2">Prêmio</label>
                <input
                  name="premio_nome"
                  type="text"
                  id="premioRifa"
                  className={`border-2 p-2 rounded-3xl w-full ${errors.premio_nome ? 'border-red-500' : 'border-black'}`}
                  placeholder="Ex: Tv 50'"
                  value={formData.premio_nome}
                  onChange={handleChange}
                />
                {errors.premio_nome && <p className="text-red-500">{errors.premio_nome}</p>}
              </div>
              <div className="w-full md:w-1/4 p-2">
                <label htmlFor="dataSorteio" className="text-2xl p-2">Data do sorteio</label>
                <input
                  name="data_sorteio"
                  type="date"
                  id="dataSorteio"
                  className={`border-2 p-2 rounded-3xl w-full ${errors.data_sorteio ? 'border-red-500' : 'border-black'}`}
                  placeholder="Ex: 99/99/9999"
                  value={formData.data_sorteio}
                  onChange={handleChange}
                />
                {errors.data_sorteio && <p className="text-red-500">{errors.data_sorteio}</p>}
              </div>
              <div className="w-full md:w-1/4 p-2">
                <label htmlFor="valorBilhete" className="text-2xl p-2">Valor do bilhete</label>
                <div className={`flex items-center border-2 p-2 rounded-3xl w-full ${errors.preco_bilhete ? 'border-red-500' : 'border-black'}`}>
                  <span className="mr-2">R$</span>
                  <input
                    name="preco_bilhete"
                    type="number"
                    step={0.01}
                    id="valorBilhete"
                    className="flex w-full focus:ring-0 border-none outline-none"
                    placeholder="0,00"
                    value={formData.preco_bilhete}
                    onChange={handleChange}
                  />
                </div>
                {errors.preco_bilhete && <p className="text-red-500">{errors.preco_bilhete}</p>}
              </div>
              <div className="w-full md:w-1/4 p-2">
                <label htmlFor="quantBilhete" className="text-2xl p-2">Total de bilhetes</label>
                <input
                  name="quant_bilhetes"
                  type="number"
                  id="quantBilhete"
                  className={`border-2 p-2 rounded-3xl w-full ${errors.quant_bilhetes ? 'border-red-500' : 'border-black'}`}
                  placeholder="Ex: 60"
                  min={10}
                  value={formData.quant_bilhetes}
                  onChange={handleChange}
                />
                {errors.quant_bilhetes && <p className="text-red-500">{errors.quant_bilhetes}</p>}
              </div>
            </div>
          </form>
        </div>
        <div className="p-2 grow-0 w-full md:w-1/3">
          <div className="flex flex-col">
            <label htmlFor="fotosPremio" className="text-3xl p-2">Fotos do Prêmio</label>
            <input
              type="file"
              id="fotosPremio"
              className={`border-2 p-2 rounded-3xl h-80 ${errors.premio_imagem ? 'border-red-500' : 'border-black'}`}
              onChange={handleFileChange}
            />
            {errors.premio_imagem && <p className="text-red-500">{errors.premio_imagem}</p>}
          </div>
        </div>
      </div>
      <div className="p-8">
        <ul className="list-disc pl-5">
          <li>Faça um upload da foto para confirmar o seu objetivo da rifa, isso transmite mais veracidade e consegue adquirir mais recursos para sua rifa.</li>
          <li>Imagens com tamanho mínimo de 377x312</li>
          <li>Imagens do tipo: jpg, jpeg ou png</li>
        </ul>
      </div>
      <div className="flex items-center justify-center p-8">
        <button form="enter" type="submit" className="w-64 mr-20 border-2 bg-[#7B66FD] text-white rounded-md py-1 text-xl border-black">
          Criar Rifa
        </button>
      </div>
    </div>
  );
};
