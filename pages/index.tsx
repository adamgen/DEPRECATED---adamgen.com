import { NextPage } from 'next';

import classNames from 'classnames';
import { twPageContainer } from '../utils/tailwind-mixins';

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
                Want to get to know me better before we talk? Here is how I
                think of software:
            </p>

            <div></div>
        </div>
    );
};

export default Home;
