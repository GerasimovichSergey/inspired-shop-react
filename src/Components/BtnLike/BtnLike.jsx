import { ReactComponent as LikeSVG } from '../../assets/heart.svg';
import style from './Btn.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../features/favoriteSlices.js';
import classNames from 'classnames';


export const BtnLike = ({ id }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favorites.includes(id));

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite({ id }));
        } else {
            dispatch(addToFavorite({ id }));
        }
    };

    return (
        <button className={isFavorite ? classNames(style.like, style.active) : style.like}
                aria-label="Добавить в избранное" type="button"
                onClick={handleToggleFavorite}>
            <LikeSVG />
        </button>
    );
};