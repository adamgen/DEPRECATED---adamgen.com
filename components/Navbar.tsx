import Link from 'next/link';
import Image from 'next/image';
import Avatar from '../pages/avatar.png';

export const Navbar: React.FC = () => {
    return (
        <div className="max-w-3xl m-auto p-6 flex justify-between font-sans font-light items-center flex-col sm:flex-row">
            <Link href="/">
                <a className="font-normal text-lg flex items-center">
                    <Image width={80} height={80} src={Avatar} />
                    Adam Genshaft
                </a>
            </Link>
            <Link href="/">
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
    );
};
