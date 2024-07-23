import google_logo2 from '../assets/google_logo2.png';
const apiKey = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const apiUrl = import.meta.env.VITE_REDIRECT_URI;

const GoogleComponente = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${apiKey}&redirect_uri=${apiUrl}&response_type=code&scope=openid%20email%20profile`;

    return (
        <a href={googleAuthUrl}>
            <div className="flex items-center border-2 max-h-[50px] rounded-3xl justify-center">
                <div>
                    <img src={google_logo2} alt="google_logo2" />
                </div>
                <div className="flex items-center p-2">
                    Fazer login com o Google
                </div>
            </div>
        </a>
    );
};

export default GoogleComponente;
