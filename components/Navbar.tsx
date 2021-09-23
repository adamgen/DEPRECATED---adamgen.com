import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import Avatar from '../pages/avatar.png';

export const Navbar: React.FC<{ isHome: boolean }> = ({ isHome }) => {
    return (
        <div className={classNames({ 'bg-black text-white': isHome })}>
            <div
                className={classNames(
                    'max-w-3xl m-auto p-6 flex justify-between font-sans font-light items-center flex-col sm:flex-row',
                )}
            >
                <Link href="/">
                    <a className="font-normal text-lg flex items-center">
                        <Image width={80} height={80} src={Avatar} />
                        Adam Genshaft
                    </a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/">
                    <a>Hire Consulting</a>
                </Link>
                <Link href="/">
                    <a>Blog</a>
                </Link>
                <Link href="/">
                    <a>Code Snippets</a>
                </Link>
            </div>
        </div>
    );
};
