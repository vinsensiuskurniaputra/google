import {getProviders, signIn} from "next-auth/react"
import { Header } from "../../components";

const signin = ({providers}) => {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className='flex flex-col items-center'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
              alt='google'
              className="w-52 object-cover"
            />
            <p className="text-sm italic my-10 text-center">This website is created for learning purposes</p>
            <button onClick={() => signIn(provider.id, {callbackUrl:'/'})} className='p-3 bg-red-400 rounded-lg text-white hover:bg-red-500'>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signin;
