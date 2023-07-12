import style from './Category.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';


export const Category = ({ list }) => {
  const location = useLocation();
  const locationGender = location.pathname.split('/')[1];
  const gender = list.find(elem => elem.link === locationGender);

  return (
    <ul className={style.category}>
      {gender.categories.map((item) => (
        <li key={item.link}>
          <NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
                   to={`${gender.link}/${item.link}`}>{item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};