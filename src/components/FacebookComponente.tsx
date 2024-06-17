import facebook_logo from '../assets/facebook_logo.png'

const FacebookComponente = () => {
  return (
    <a>
<div  className='flex items-center  border-2 max-h-[50px] rounded-3xl justify-center'>
        <div>
          <img src={facebook_logo} alt="facebook_logo" className='' />
        </div>
        <div className='flex items-center p-2'>Fazer login com o Facebook</div>
      </div>
    </a>
  )
}

export default FacebookComponente