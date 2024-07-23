import { useState } from "react";
import NavBar from "../components/NavBar";
import { RifaCreate } from "../Interfaces/RifaCreate";
import axios from "axios";
import { createRifa } from "../services/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from "../components/Inputs";
import { RifaFormErrors } from "../Interfaces/RifaFormErrors";

export const CriacaoRifa = () => {
  const [formData, setFormData] = useState<RifaCreate>({
    nome: '',
    descricao: '',
    preco_bilhete: 0,
    premio_nome: '',
    premio_imagem: new File([], "empty.txt"),
    data_sorteio: '',
    quant_bilhetes: 0,
  });

  const [errors, setErrors] = useState<RifaFormErrors>({
    nome: '',
    descricao: '',
    preco_bilhete: '',
    premio_nome: '',
    data_sorteio: '',
    quant_bilhetes: '',
    premio_imagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? parseFloat(value) : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(selectedFile.type)) {
        setErrors(prev => ({ ...prev, premio_imagem: 'A imagem deve ser do tipo jpg, jpeg ou png.' }));
        return;
      }
      setFormData({ ...formData, premio_imagem: selectedFile });
      setErrors(prev => ({ ...prev, premio_imagem: '' }));
    }
  };

  const isDateInThePast = (data: string) => {
    const inputDate = new Date(data);
    const currentDate = new Date();
    inputDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    return inputDate < currentDate;
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

    if (formData.preco_bilhete <= 0 || formData.preco_bilhete > 100) {
      newErrors.preco_bilhete = 'O preço do bilhete deve ser entre 0 e R$100.';
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

    if (isDateInThePast(formData.data_sorteio)) {
      newErrors.data_sorteio = 'A data do sorteio não pode estar no passado.';
      valid = false;
    }

    if (formData.quant_bilhetes < 10 || formData.quant_bilhetes > 80) {
      newErrors.quant_bilhetes = 'A quantidade de bilhetes deve ser entre 10 e 80.';
      valid = false;
    }

    if (formData.premio_imagem.size === 0) {
      newErrors.premio_imagem = 'Arquivo é obrigatório.';
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
    data.append('premio_imagem', formData.premio_imagem);
    data.append('data_sorteio', formData.data_sorteio);
    data.append('quant_bilhetes', formData.quant_bilhetes.toString());

    try {
      await createRifa(data);
      toast.success('Rifa criada com sucesso!')
      console.log(formData);
      ;
    } catch (error: any) {
      console.log(formData);

      if (typeof error === 'string') {
        toast.error(`Erro: ${error}`);
      } else if (axios.isAxiosError(error)) {
        toast.error(`Erro: ${error.response?.data?.detail?.[0]?.msg}`);
      } else {
        toast.error('Erro desconhecido ao criar rifa.');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <h1 className="text-4xl p-4">Minha conta | Crie agora sua rifa</h1>
      <div className="flex flex-wrap p-8">
        <div className="p-2 grow w-full md:w-1/2">
          <form id="enter" onSubmit={handleSubmit} className="flex flex-col">
            <Input  
              name="nome"
              type="text"
              id="tituloRifa"
              label="Titulo da rifa"
              placeholder="Ex: Rifa para ajudar..."
              className={`border-2 p-2 rounded-3xl mb-4 ${errors.nome ? 'border-red-500' : 'border-black'}`}
              value={formData.nome}
              onChange={handleChange}
              errorMessage={errors.nome}
            />
            <Input  
              name="descricao"
              type="text"
              id="objetivoRifa"
              label="Informe o objetivo da sua rifa"
              placeholder=""
              className={`border-2 p-2 rounded-3xl h-32 mb-4 ${errors.descricao ? 'border-red-500' : 'border-black'}`}
              value={formData.descricao}
              onChange={handleChange}
              errorMessage={errors.descricao}
            />

            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/4 p-2">
                <Input  
                  name="premio_nome"
                  type="text"
                  id="premioRifa"
                  label="Prêmio"
                  placeholder="Ex: Tv 50'"
                  className={`border-2 p-2 rounded-3xl w-full ${errors.premio_nome ? 'border-red-500' : 'border-black'}`}
                  value={formData.premio_nome}
                  onChange={handleChange}
                  errorMessage={errors.premio_nome}
                />
              </div>
              <div className="w-full md:w-1/4 p-2">
                <Input  
                  name="data_sorteio"
                  type="date"
                  id="dataSorteio"
                  label="Data do sorteio"
                  className={`border-2 p-2 rounded-3xl w-full ${errors.data_sorteio ? 'border-red-500' : 'border-black'}`}
                  value={formData.data_sorteio}
                  onChange={handleChange}
                  errorMessage={errors.data_sorteio}
                /> 
              </div>
              <div className="w-full md:w-1/4 p-2">
                <Input  
                  name="preco_bilhete"
                  type="number"
                  id="valorBilhete"
                  label="Valor do bilhete"
                  className={`flex items-center border-2 p-2 rounded-3xl w-full ${errors.preco_bilhete ? 'border-red-500' : 'border-black'}`}
                  value={formData.preco_bilhete}
                  onChange={handleChange}
                  errorMessage={errors.preco_bilhete}
                /> 
              </div>
              <div className="w-full md:w-1/4 p-2">
                <Input  
                  name="quant_bilhetes"
                  type="number"
                  id="quantBilhete"
                  label="Total de bilhetes"
                  className={`border-2 p-2 rounded-3xl w-full ${errors.quant_bilhetes ? 'border-red-500' : 'border-black'}`}
                  value={formData.quant_bilhetes}
                  onChange={handleChange}
                  errorMessage={errors.quant_bilhetes}
                /> 
              </div>
            </div>
          </form>
        </div>
        <div className="p-2 grow-0 w-full md:w-1/3">
          <div className="flex flex-col">
            <Input 
              label="Fotos do Prêmio"
              type="file"
              id="fotosPremio"
              className={`border-2 p-2 rounded-3xl h-80 ${errors.premio_imagem ? 'border-red-500' : 'border-black'}`}
              onChange={handleFileChange}
              errorMessage={errors.premio_imagem}
            />
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
      <ToastContainer />
    </div>
  );
};
