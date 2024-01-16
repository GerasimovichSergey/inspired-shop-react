import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import style from './ErrorPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchColors } from '../../features/colorSlice.js';
import { fetchNavigation } from '../../features/navigationSlice.js';


export const ErrorPage = () => {
    const routeError = useRouteError();
    const { status } = useSelector(state => state.statusServer);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const timerIdRef = useRef(null);

    useEffect(() => {
        if (status && location.pathname === '/404') {
            navigate('/');
        }
    }, [status, location, navigate]);

    useEffect(() => {
        if (!status && location.pathname === '/404') {
            clearTimeout(timerIdRef.current);

            timerIdRef.current = setInterval(() => {
                dispatch(fetchColors());
                dispatch(fetchNavigation());
            }, 3000)
        }

        return () => {
            clearTimeout(timerIdRef.current);
        }
    }, [dispatch, status, location]);

    return (
        <div className={style.error}>
            <h2 className={style.title}>Ошибка 404</h2>
            <p className={style.message}>{routeError?.message || 'Неизвестная ошибка, попробуйте позже'}</p>
        </div>
    );
};