import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import Avatar from '../public/avatar.png';
import { twPageContainer } from '../utils/tailwind-mixins';

export const Navbar: React.FC<{ isHome: boolean; homeColor: string }> = ({
    isHome,
    homeColor,
}) => {
    return (
        <div className={classNames({ [`bg-${homeColor} text-white`]: isHome })}>
            <div
                className={classNames(
                    twPageContainer,
                    'p-6 flex justify-between font-light items-center flex-col sm:flex-row',
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
