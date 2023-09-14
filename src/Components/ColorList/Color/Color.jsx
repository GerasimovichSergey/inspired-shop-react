import style from './Color.module.scss';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';


export const Color = ({ color, check }) => {
    const colorRef = useRef(null);

    useEffect(() => {
        colorRef.current.style.setProperty('--data-color', color)
    }, [color]);

    return (
        <li className={classNames(style.color, check ? style.colorCheck : '')} ref={colorRef} />
    )
};