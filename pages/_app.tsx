import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Navbar isHome={router.route === '/'} />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
