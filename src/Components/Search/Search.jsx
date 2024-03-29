import style from './Search.module.scss';
import { Container } from '../Layout/Container/Container.jsx';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toggleSearch } from '../../features/searchSlice.js';


export const Search = () => {
    const { openSearch } = useSelector((state) => state.search);

    const initialValues = {
        search: '',
    };

    const validationSchema = Yup.object({
        search: Yup.string().required('Поле обязательно для заполнения'),
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = ({ search }, { resetForm }) => {
        if (search.trim()) {
            navigate(`/search?q=${search}`);
            resetForm();
            dispatch(toggleSearch(false));
        }
    };

    return (
        openSearch && (<div className={style.search}>
            <Container>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className={style.form}>
                        <Field className={style.input} type="search" name="search" placeholder="Найти..." />
                        <ErrorMessage name="search" component={'p'} className={style.error} />
                        <button className={style.btn} type="submit">Искать</button>
                    </Form>
                </Formik>
            </Container>
        </div>)
    );
};