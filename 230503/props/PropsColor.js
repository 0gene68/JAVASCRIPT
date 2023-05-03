import React from "react";

const PropsColor = ({color, name}) => {
    return(
        <div style={{ color }}>Hello, {name}</div>
    )
}

PropsColor.defaultProps = {
    name: 'noName'
};

export default PropsColor;