import style from './Count.module.scss';
import classNames from 'classnames';


export const Count = ({ className, count, handleIncrement, handleDecrement }) => {
    return (
        <div className={classNames(style.count, className)}>
            <button className={style.item} type="button" onClick={handleDecrement}>-</button>
            <span className={classNames(style.item, style.number)}>{count}</span>
            <button className={style.item} type="button" onClick={handleIncrement}>+</button>
        </div>
    )
};