import { Container } from '../Layout/Container/Container.jsx';
import style from './Goods.module.scss';
import { Product } from '../Product/Product.jsx';
import { useSelector } from 'react-redux';
import { Pagination } from '../Pagination/Pagination.jsx';


export const Goods = ({ title }) => {
    const { goodsList } = useSelector(state => state.goods);

    return (
        <section>
            <Container>
                <h2 className={style.title}>{title ?? 'Новинки'}</h2>
                <ul className={style.list}>
                    {goodsList.map(item =>
                        <li key={item.id}>
                            <Product key={item.id} {...item} />
                        </li>)}
                </ul>
                <Pagination />
            </Container>
        </section>
    );
};