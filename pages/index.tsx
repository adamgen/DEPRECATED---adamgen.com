import { NextPage } from 'next';

import Svg from './waves-top.svg';

const Home: NextPage<{ homeColor: string }> = ({ homeColor }) => {
    return (
        <div>
            <Svg className={`text-${homeColor} w-full h-auto`} />
        </div>
    );
};

export default Home;
