import NavBar from "./NavBar"

export const CriarRifa = () => {
    return (
        
        <div>
            <NavBar />
            <h1 className="text-4xl p-4">Minha conta | Crie agora sua rifa</h1>
            <div className="flex">
                <div className="p-2 grow">
                    <form action="" className="flex flex-col">
                        <h1 className="text-3xl p-2">Título da Rifa</h1>
                        <input type="text" className="border-2 border-black p-2 rounded-3xl" placeholder="Ex: Rifa para ajudar..." />
                        <h1 className="text-3xl p-2">Informe o objetivo da sua rifa</h1>
                        <textarea className="border-2 border-black p-2 rounded-3xl h-32" />
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-2xl p-2">Premio</h1>
                                <input type="text" className="border-2 border-black p-2 rounded-3xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl p-2">Data do sorteio</h1>
                                <input type="text" className="border-2 border-black p-2 rounded-3xl" />
                            </div>
                            <div>
                                <h1 className="text-2xl p-2">Valor do bilhete</h1>
                                <input type="text" className="border-2 border-black p-2 rounded-3xl" />
                            </div>

                        </div>

                    </form>
                </div>
                <div className="p-2 grow-0">
                    <div className="flex flex-col">
                        <h1 className="text-3xl p-2">Imagem do Prêmio</h1>
                        <input type="file" className="border-2 border-black p-2 rounded-3xl h-80" />
                    </div>
                </div>
                <div className="fixed bottom-0 left-0 w-full bg-white p-4">
                    <h1 className="text-xl font-bold">Faça um upload da foto para confirmar o seu objetivo da rifa, isso transmite mais veracidade e consegue adquirir mais recursos para sua rifa.</h1>
                    <h1 className="text-xl font-bold">Imagens com tamanho mínimo de 377x312</h1>
                    <h1 className="text-xl font-bold">Imagens do tipo: jpg, jpeg ou png</h1>
                </div>
            </div>
        </div>
    )
}
