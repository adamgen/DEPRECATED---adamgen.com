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
                    'py-6 flex justify-between font-light items-center flex-col sm:flex-row',
                )}
            >
                <Link href="/">
                    <a className="font-normal text-lg flex items-center">
                        <div className={'mr-2 inline-block'}>
                            <Image width={60} height={60} src={Avatar} />
                        </div>
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
