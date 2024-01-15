import { Container } from '../../Layout/Container/Container.jsx';
import style from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../../features/searchSlice.js';


export const Top = () => {
    const { countItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleOpenSearch = () => {
        dispatch(toggleSearch());
    };

    return (
        <div className={style.top}>
            <Container className={style.container}>
                <a className={cn(style.link, style.phone)} href="tel:89304902620">8 930 490 26 20</a>

                <NavLink className={style.logo} to="/">
                    <img src={logo} alt="Логотип Inspired" />
                </NavLink>

                <div className={style.navigation}>
                    <ul className={style.navList}>
                        <li>
                            <button className={style.link} onClick={handleOpenSearch}>
                                <SearchSVG />
                            </button>
                        </li>
                        <li>
                            <NavLink to="/cart" className={style.link}>
                                <CartSVG />
                                <span className={style.linkCount}>{countItems}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/favorite" className={classNames(style.link, style.like)}>
                                <LikeSVG />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};