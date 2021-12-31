import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Navbar } from '../components/Navbar';
import classNames from 'classnames';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    const homeColor = 'indigo-900';

    return (
        <div className={'font-sans'}>
            <Navbar />

            {router.isPreview && (
                <div
                    className={classNames('max-w-3xl m-auto px-4 md:px-0 mb-8')}
                >
                    <div
                        className={classNames(
                            'px-3 py-1 bg-yellow-500 inline rounded',
                        )}
                    >
                        PREVIEW MODE
                    </div>
                </div>
            )}

            <Component {...pageProps} homeColor={homeColor} />
        </div>
    );
};
export default MyApp;
