import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps, router }: AppProps) {
    const homeColor = 'indigo-900';

    return (
        <div className={'font-sans'}>
            <Navbar isHome={router.route === '/'} homeColor={homeColor} />
            <Component {...pageProps} homeColor={homeColor} />
        </div>
    );
}
export default MyApp;
