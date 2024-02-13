import style from './OrderModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../const.js';
import { clearCart } from '../../../features/cartSlice.js';


export const OrderModal = () => {
    const { order } = useSelector(state => state.cart);
    const { goodsList } = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(clearCart());
    };

    const handleModalClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={style.modal} onClick={handleCloseModal}>
            <div className={style.body} onClick={handleModalClick}>
                <h2 className={style.title}>Заказ оформлен №{order.id}</h2>
                <div className={style.description}>
                    <p>Спасибо за выбор нашего магазина!</p>
                    <p>Здесь вы можете посмотреть все детали вашего заказа</p>
                </div>
                <ul className={style.customer}>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}>Получатель</span>
                        <span className={style.customerData}>{order.values.fio}</span>
                    </li>
                    {
                        order.values.delivery === 'delivery' &&
                        <li className={style.customerItem}>
                            <span className={style.customerTitle}>Адрес доставки</span>
                            <span className={style.customerData}>{order.values.address}</span>
                        </li>
                    }
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}>Телефон</span>
                        <span className={style.customerData}>{order.values.phone}</span>
                    </li>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}>E-mail</span>
                        <span className={style.customerData}>{order.values.email}</span>
                    </li>
                    <li className={style.customerItem}>
                        <span className={style.customerTitle}>Способ получения</span>
                        <span className={style.customerData}>
                            {order.values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'}
                        </span>
                    </li>
                </ul>
                <ul className={style.goods}>
                    {order.order.map(item => {
                        const product = goodsList.find(product => product.id === item.id);

                        return (
                            <li className={style.goodsItem} key={`${item.id}${item.color}${item.size}`}>
                                <img className={style.goodsImg} src={`${API_URL}/${product.pic}`} alt={product.title} />
                                <p className={style.goodsCount}>X{item.count}</p>
                            </li>
                        )
                    })}
                </ul>
                <div className={style.total}>
                    <p>Итого</p>
                    <p>руб {order.totalPrice}</p>
                </div>
                <button className={style.close} onClick={handleCloseModal}></button>
            </div>
        </div>
    );
};