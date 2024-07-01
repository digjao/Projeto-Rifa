import NavBar from "./NavBar"

export const CriarRifa = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <h1 className="text-4xl p-4">Minha conta | Crie agora sua rifa</h1>
            <div className="flex flex-wrap p-8">
                <div className="p-2 grow w-full md:w-1/2">
                    <form action="" className="flex flex-col">
                        <label htmlFor="tituloRifa" className="text-3xl p-2">Título da Rifa</label>
                        <input type="text" id="tituloRifa" className="border-2 border-black p-2 rounded-3xl mb-4" placeholder="Ex: Rifa para ajudar..." />
                        <label htmlFor="objetivoRifa" className="text-3xl p-2">Informe o objetivo da sua rifa</label>
                        <textarea id="objetivoRifa" className="border-2 border-black p-2 rounded-3xl h-32 mb-4" />
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/3 p-2">
                                <label htmlFor="premioRifa" className="text-2xl p-2">Prêmio</label>
                                <input type="text" id="premioRifa" className="border-2 border-black p-2 rounded-3xl w-full" placeholder="Ex: Tv 50'"/>
                            </div>
                            <div className="w-full md:w-1/3 p-2">
                                <label htmlFor="dataSorteio" className="text-2xl p-2">Data do sorteio</label>
                                <input type="date" id="dataSorteio" className="border-2 border-black p-2 rounded-3xl w-full" placeholder="Ex: 99/99/9999"/>
                            </div>
                            <div className="w-full md:w-1/3 p-2">
                                <label htmlFor="valorBilhete" className="text-2xl p-2">Valor do bilhete</label>
                                <input type="number" step={0.01} id="valorBilhete" className="border-2 border-black p-2 rounded-3xl w-full" placeholder="Ex: R$0,00"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="p-2 grow-0 w-full md:w-1/2">
                    <div className="flex flex-col">
                        <label htmlFor="fotosPremio" className="text-3xl p-2">Fotos do Prêmio</label>
                        <input type="file" id="fotosPremio" className="border-2 border-black p-2 rounded-3xl h-80" />
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
                <button type="submit" className="w-64 mr-20 border-2 bg-[#7B66FD] text-white rounded-md py-1 text-xl border-black">Criar Rifa</button>
            </div>
        </div>
    )
}
