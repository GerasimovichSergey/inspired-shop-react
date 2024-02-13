import { Container } from '../../Layout/Container/Container.jsx';
import style from './Order.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { PatternFormat } from 'react-number-format';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../../features/cartSlice.js';


export const Order = ({ cartItems }) => {
    const dispatch = useDispatch();
    const handleSubmitOrder = (values) => {
        dispatch(sendOrder({ order: cartItems, values }));
    };

    const validationSchema = Yup.object({
        fio: Yup.string().required('Заполните ФИО'),
        address: Yup.string().test(
            'deliveryTest',
            'Введите адрес доставки',
            function (value) {
                return this.parent.delivery === 'delivery' ? !!value : true;
            }
        ),
        phone: Yup.string().required('Заполните номер телефона').matches(/^\+\d{1}\(\d{3}\)-\d{3}-\d{4}$/, 'Некоректный номер телефона'),
        email: Yup.string().email('Некорректный формат email').required('Заполните email'),
        delivery: Yup.string().required('Выберите способ доставки'),
    });

    return (
        <section>
            <Container>
                <h2 className={style.title}>Оформление заказа</h2>
                <Formik
                    initialValues={{
                        fio: '',
                        address: '',
                        phone: '',
                        email: '',
                        delivery: '',
                    }}
                    onSubmit={handleSubmitOrder}
                    validationSchema={validationSchema}
                >
                    <Form className={style.form}>
                        <fieldset className={style.personal}>
                            <label className={style.label}>
                                <Field className={style.input} type="text" name="fio" placeholder="ФИО*" />
                                <ErrorMessage className={style.error} name="fio" component={'span'} />
                            </label>
                            <label className={style.label}>
                                <Field className={style.input} type="text" name="address"
                                       placeholder="Адрес доставки" />
                                <ErrorMessage className={style.error} name="address" component={'span'} />
                            </label>
                            <label className={style.label}>
                                <Field className={style.input} as={PatternFormat}
                                       format="+7(###)-###-####"
                                       mask="_"
                                       name="phone"
                                       placeholder="Телефон" />
                                <ErrorMessage className={style.error} name="phone" component={'span'} />
                            </label>
                            <label className={style.label}>
                                <Field className={style.input} type="email" name="email" placeholder="Email*" />
                                <ErrorMessage className={style.error} name="email" component={'span'} />
                            </label>
                        </fieldset>
                        <fieldset className={style.radioList}>
                            <label className={style.radio}>
                                <Field className={style.radioInput}
                                       type="radio"
                                       name="delivery"
                                       value="delivery">
                                </Field>
                                <span>Доставка</span>
                            </label>
                            <label className={style.radio}>
                                <Field className={style.radioInput} type="radio" name="delivery" value="self"></Field>
                                <span>Самовывоз</span>
                            </label>
                            <ErrorMessage className={style.error} name="delivery" component={'span'} />
                        </fieldset>
                        <button className={style.submit} type="submit">Оформить</button>
                    </Form>
                </Formik>
            </Container>
        </section>
    );
}