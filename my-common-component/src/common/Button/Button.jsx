import React, { useEffect, useState, useLayoutEffect } from 'react';
// import ButtonModule from "./Button.module.css";

const btnProperty = {
    'type': {
        "primary": 'primary',
        "ghost": 'ghost',
        "link": 'link',
        "text": 'text',
        "default": 'default',
    },
    "size": {
        "large": "large",
        "middle": "middle",
        "small": "small",
    },
    "shape": {
        "default": "default",
        "circle": "circle",
        "round": "round",
    },
    "danger": false,
    "disable": false
}

const Button = (props) => {
    const [type, setType] = useState(btnProperty.default);
    const [size, setSize] = useState(btnProperty.middle);
    console.log(props);

    useLayoutEffect(() => {
        switch (props.type) {
            case 'primary':
                setType(props.type);
                break;
            case 'link':
                setType(props.type);
                break;
            case 'text':
                setType(props.type);
                break;
            case 'default':
                setType(props.type);
                break;
            default:
                setType('default');
                break;
        }

        switch (props.size) {
            case 'large':
                setSize("sw-size-large");
                console.log('in large');
                break;
            case 'middle':
                setSize("sw-size-middle");
                console.log('in middle');
                break;
            case 'small':
                setSize("sw-size-small");
                console.log('in small');
                break;
            default:
                setSize('sw-size-middle');
                break;
        }
    }, []);

    return (
        <>
            <button className={"btn " + type + " " + size}
            >{props.children}</button>
        </>
    )
}

export default Button;