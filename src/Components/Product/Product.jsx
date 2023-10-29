import style from './Product.module.scss';
import { API_URL } from '../../const.js';
import { NavLink } from 'react-router-dom';
import { ColorList } from '../ColorList/ColorList.jsx';
import { BtnLike } from '../BtnLike/BtnLike.jsx';


export const Product = ({ id, pic, title, price, colors, description }) => {
    return (
        <article className={style.product}>
            <NavLink to={`/product/${id}`} className={style.link}>
                <img className={style.image} src={`${API_URL}/${pic}`} alt={`${title} ${description}`} />
                <h3 className={style.title}>{title}</h3>
            </NavLink>
            <div className={style.row}>
                <p className={style.price}>руб {price}</p>
                <BtnLike id={id} />
            </div>
            <ColorList colors={colors} />
        </article>
    )
};