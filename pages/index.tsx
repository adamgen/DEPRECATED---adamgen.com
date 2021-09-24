import { NextPage } from 'next';

import WavesTop from './waves-top.svg';
import PeaksBottom from './peaks-bottom.svg';
import PeaksDown from './peaks-down.svg';
import PeaksLeft from './peaks-left.svg';
import PeaksRight from './peaks-right.svg';

import classNames from 'classnames';
import { twPageContainer } from '../utils/tailwind-mixins';
import styled from 'styled-components';

const Home: NextPage<{ homeColor: string }> = ({ homeColor }) => {
    return (
        <div className={'text-white'}>
            <div className={'bg-red-500'}>
                <WavesTop className={`text-${homeColor} w-full h-auto`} />
                <div
                    className={classNames(
                        twPageContainer,
                        'text-3xl h-64 flex justify-center flex-col font-bold',
                    )}
                >
                    <p className={'mb-2 mt-4'}>Hi, I’m Adam 👋🏼</p>
                    <p>
                        I help software teams collaborate better in achieving
                        their mission.
                    </p>
                </div>
                <PeaksBottom className={`text-${homeColor} w-full h-auto`} />
            </div>
            <div className={'bg-yellow-300'}>
                <div className={classNames(twPageContainer, 'text-black')}>
                    <p className={'pt-16 pb-8 text-3xl font-light'}>
                        I do that by giving these services to companies that
                        work with me:
                    </p>
                </div>
            </div>

            <Services className={'w-screen flex relative'}>
                <div
                    className={
                        'absolute top-0 right-1/2 transform translate-x-1/2 '
                    }
                >
                    <PeaksLeft className={'text-red-300'} />
                    <PeaksRight className={'absolute top-0 text-blue-700'} />
                </div>
                <PeaksDown className={'w-full h-auto absolute top-0'} />
                <SingleService className={'w-1/2 bg-blue-700 h-screen'} />
                <SingleService className={'w-1/2 bg-red-300 h-screen'} />
            </Services>
        </div>
    );
};

export default Home;

const Services = styled.div``;

const SingleService = styled.div`
    padding-top: 6vw;
`;
