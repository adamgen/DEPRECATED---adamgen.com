import { NextPage } from 'next';

import classNames from 'classnames';
import { twPageContainer } from '../utils/tailwind-mixins';
import React from 'react';

const Home: NextPage<{ homeColor: string }> = ({ homeColor }) => {
    return (
        <div className={classNames(twPageContainer, 'text-3xl font-light')}>
            <p className={'mb-6 font-bold'}>Hi, I’m Adam 👋🏼</p>

            <p className={'mb-6'}>
                I help software teams collaborate better in achieving their
                mission.
            </p>

            <p className={'mb-6'}>
                I do that by providing these services to companies that work
                with me:
            </p>

            <ol className={'mb-6 list-decimal list-inside text-2xl'}>
                <li className={'mb-2'}>
                    Developing infrastructure for development process governance
                </li>
                <li>Consulting and software development</li>
            </ol>

            <p className={'mb-6'}>
                Want to get to know me better before we talk? Here is my blog
                and how I think of software:
            </p>

            <div className={'h-10'} />

            <BlogPost
                title={'Own your product quality by governing it'}
                subtitle={'What tools can you use to secure product quality'}
                link={'/'}
            />

            <BlogPost
                title={"Let's go for a JS adventure, which map should you use?"}
                subtitle={
                    'What methods exist to draw maps with js and what are their ups and downs'
                }
                link={'/'}
            />

            <BlogPost
                title={'Leadership principles for development teams'}
                subtitle={
                    'What methods exist to draw maps with js and what are their ups and downs'
                }
                link={'/'}
            />

            <BlogPost
                title={'Using custom lint rules to avoid production bugs'}
                subtitle={
                    'How to detect possible lint rules and actual lint code examples'
                }
                link={'/'}
            />
        </div>
    );
};

export default Home;

interface BlogPostProps {
    title: string;
    subtitle: string;
    link: string;
}
const BlogPost: React.FC<BlogPostProps> = ({ title, subtitle, link }) => {
    return (
        <div className={'text-lg mb-10'}>
            <a className={'text-xl font-medium'} href={link}>
                {title}
            </a>
            <div className={'italic'}>{subtitle}</div>
            <a className={'text-pink-700 font-normal'} href={link}>
                Read →
            </a>
        </div>
    );
};
