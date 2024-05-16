

const Login = () => {
  return (
    <div className="">
      <header className="h-14 bg-[#B5B5B5] border-b-2 border-black flex items-center pl-4">
        <h1>Logo</h1>
      </header>
      <div className="flex justify-center items-center mt-48">
        <div className="w-96 p-6  rounded-3xl drop-shadow-5xl border bg-[#EFEFEF]">
          <h1 className="mb-10 text-3xl block text-center font-semibold">Login</h1>
          <form>
            <div>
              <input type="text" id="username" className=" border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF]" placeholder="Email ou nome de usuário"></input>
            </div>
            <div>
              <input type="password" id="password" className="border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF] " placeholder="Senha"></input>
            </div>
            <div className="mt-3 flex justify-between items-center mb-5">
              <div className="flex items-center">
                <input className="h-4 w-4" type="checkbox"/>
                <label htmlFor="" className="font-semibold ml-2">Lembrar de mim</label>
              </div>
              <div>
                <a href="#" className="font-bold">Esqueceu a senha?</a>
              </div>
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
              <button type="submit" className="border-2 bg-[#7B66FD] text-white rounded-md py-1 w-48 text-xl border-black">Entrar</button>
            </div>
          </form>
          <div className="mt-3 flex justify-center">
            <h1 className="font-bold">Não tem uma conta? </h1>
            <a href="#" className="text-[#7B66FD] ml-2">Inscreva-se</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login