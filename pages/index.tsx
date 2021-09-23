import { NextPage } from 'next';
import styled from 'styled-components';

import Svg from './wave.svg';

const Home: NextPage = () => {
    return (
        <div>
            <Wave />
        </div>
    );
};

export default Home;

const Wave = styled(Svg)`
    color: #000;
`;
