import NavBar from "./NavBar"

export const CriarRifa = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <h1 className="text-4xl p-4">Minha conta | Crie agora sua rifa</h1>
            <div className="flex p-8">
                <div className="p-2 grow">
                    <form action="" className="flex flex-col">
                        <h1 className="text-3xl p-2">Título da Rifa</h1>
                        <input type="text" className="border-2 border-black p-2 rounded-3xl" placeholder="Ex: Rifa para ajudar..." />
                        <h1 className="text-3xl p-2">Informe o objetivo da sua rifa</h1>
                        <textarea className="border-2 border-black p-2 rounded-3xl h-32" />
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-2xl p-2">Premio</h1>
                                <input type="text" className="border-2 border-black p-2 rounded-3xl" placeholder="Ex: Tv 50'"/>
                            </div>
                            <div>
                                <h1 className="text-2xl p-2">Data do sorteio</h1>
                                <input type="text" className="border-2 border-black p-2 rounded-3xl" placeholder="Ex: 99/99/9999"/>
                            </div>
                            <div>
                                <h1 className="text-2xl p-2">Valor do bilhete</h1>
                                <input type="text" className="border-2 border-black p-2 rounded-3xl" placeholder="Ex: R$0,00"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="p-2 grow-0">
                    <div className="flex flex-col">
                        <h1 className="text-3xl p-2">Fotos do Prêmio</h1>
                        <input type="file" className="border-2 border-black p-2 rounded-3xl h-80" />
                    </div>
                </div>
            </div>
            <div className="p-8">
                <h1>Faça um upload da foto para confirmar o seu objetivo da rifa, isso transmite mais veracidade e consegue adquirir mais recursos para sua rifa.</h1>
                <h1>Imagens com tamanho mínimo de 377x312</h1>
                <h1>Imagens do tipo: jpg, jpeg ou png</h1>
            </div>
            <div className="flex items-center justify-center p-8">
            <button type="submit" className="w-64 mr-20 border-2 bg-[#7B66FD] text-white rounded-md py-1 text-xl border-black">Criar Rifa</button>
            </div>
        </div>
    )
}
