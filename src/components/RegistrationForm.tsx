
export default function RegistrationForm() {


  return (
    <div className="">
      <header className="h-14 bg-[#B5B5B5] border-b-2 border-black flex items-center pl-4">
        <h1>Logo</h1>
      </header>
      <div className="flex justify-center items-center mt-48">
        <div className="w-96 p-6  rounded-3xl drop-shadow-5xl border bg-[#EFEFEF]">
          <h1 className="mb-10 text-3xl block text-center font-semibold">Crie sua conta</h1>
          <form>
            <div>
              <input type="text" id="username" className=" border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF]" placeholder="Nome completo"></input>
            </div>
            <div>
              <input type="text" id="username" className=" border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF]" placeholder="Email ou telefone"></input>
            </div>
            <div>
              <input type="text" id="username" className=" border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF]" placeholder="Nome de usuário"></input>
            </div>
            <div>
              <input type="passwod" id="password" className="border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF] " placeholder="Senha"></input>
            </div>
            <div>
                <div>
                  <h1 className="mb-4">Logar com Google</h1>
                </div>
                <div>
                  <h1>Logar com Facebook</h1>
                </div>
            </div>
            <div className="flex justify-center mt-5">
              <button type="submit" className="border-2 bg-[#7B66FD] text-white rounded-md py-1 w-48 text-xl border-black">Criar conta</button>
            </div>
          </form>
          <div className="mt-3 flex justify-center">
            <h1 className="font-bold">Ja tem uma conta? </h1>
            <a href="/login" className="text-[#7B66FD] ml-2">Entrar</a>
          </div>
        </div>
      </div>
    </div>
  )
}
