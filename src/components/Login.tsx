

const Login = () => {
  return (
      <div className="flex justify-center items-center h-screen ">
        <div className="w-96 p-6  rounded-3xl  bg-[#EFEFEF]">
          <h1 className="mb-10 text-3xl block text-center font-semibold">Login</h1>
          <div>
            <input type="text" id="username" className="border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF]" placeholder="Email ou nome de usuário"></input>
          </div>
          <div>
            <input type="text" id="username" className="border-b-2 border-black w-full text-xl px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-5 bg-[#EFEFEF]" placeholder="Senha"></input>
          </div>
          <div className="mt-3 flex justify-between items-center mb-5">
            <div>
              <input className="mr-1" type="checkbox"/>
              <label htmlFor="">Lembrar de mim</label>
            </div>
            <div>
              <a href="#">Esqueceu a senha?</a>
            </div>
          </div>
          <div>
              <div>
                <h1 className="mb-4">Logar com google</h1>
              </div>
              <div>
                <h1>Logar com Facebook</h1>
              </div>
          </div>
          <div className="flex justify-center mt-5">
            <button type="submit" className="border-2 bg-indigo-700 text-white rounded-md py-1 w-48 text-xl border-black">Login</button>
          </div>
          <div className="mt-3 flex justify-center">
            <h1>Não tem uma conta? <link rel="stylesheet" href="" />Inscreva-se</h1>
          </div>
        </div>
      </div>

  )
}

export default Login