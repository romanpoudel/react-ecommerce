import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className='text-gray-900 font-bold rounded-md border p-1 w-20 bg-white' onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;