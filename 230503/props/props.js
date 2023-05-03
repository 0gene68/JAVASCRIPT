import React from 'react';
import PropsColor from './PropsColor';
import Wrapper from './Wrapper';


const PropsTest = () => {
    return(
        <Wrapper>
            <PropsColor name="react" color="red" />
            <PropsColor color="pink" />
        </Wrapper>
    );
}

export default PropsTest;
