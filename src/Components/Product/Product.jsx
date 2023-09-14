import style from './Product.module.scss';
import { API_URL } from '../../const.js';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { ColorList } from '../ColorList/ColorList.jsx';


export const Product = ({ id, pic, title, price, colors }) => {
    return (
        <article className={style.product}>
            <NavLink to={`/product/${id}`} className={style.link}>
                <img className={style.image} src={`${API_URL}/${pic}`} />
                <h3 className={style.title}>{title}</h3>
            </NavLink>
            <div className={style.row}>
                <p className={style.price}>руб {price}</p>
                <button>
                    <Like />
                </button>
                <ColorList colors={colors} />
            </div>
        </article>
    )
};