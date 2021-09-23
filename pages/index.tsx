import { NextPage } from 'next';
import styled from 'styled-components';

import Svg from './wave.svg';

const Home: NextPage<{ homeColor: string }> = ({ homeColor }) => {
    return (
        <div>
            <Svg className={`text-${homeColor}`} />
        </div>
    );
};

export default Home;
