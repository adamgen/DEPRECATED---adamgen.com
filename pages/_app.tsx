import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps, router }: AppProps) {
    const homeColor = 'indigo-700';

    return (
        <>
            <Navbar isHome={router.route === '/'} homeColor={homeColor} />
            <Component {...pageProps} homeColor={homeColor} />
        </>
    );
}
export default MyApp;
