import style from './Banner.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const.js';


export const Banner = ({ data }) => {

    return (
        data &&
        <section className={style.banner} style={{
            backgroundImage: `url(${API_URL}/${data.bg.desktop})`
        }}>
            <Container>
                <div className={style.content}>
                    <h2 className={style.title}>{data?.description}</h2>
                    <NavLink to={`/product/${data.id}`} className={style.link}>
                        Перейти
                    </NavLink>
                </div>
            </Container>
        </section>
    );
};