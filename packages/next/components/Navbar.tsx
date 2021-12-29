import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import Avatar from '../public/avatar.png';

export const Navbar: React.FC = ({}) => {
    return (
        <div>
            <div
                className={classNames(
                    'max-w-3xl m-auto px-4 md:px-0',
                    'py-6 flex justify-between font-light items-center flex-col sm:flex-row',
                )}
            >
                <Link href="/">
                    <a className="font-normal text-lg flex items-center">
                        <div className={'mr-2 inline-block'}>
                            <Image
                                width={60}
                                height={60}
                                src={Avatar}
                                alt={'Adam Genshaft logo'}
                            />
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
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/">
                    <a>Code Snippets</a>
                </Link>
            </div>
        </div>
    );
};
