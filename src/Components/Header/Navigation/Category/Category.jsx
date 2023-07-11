import style from './Category.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';


export const Category = ({ list }) => {
  return (
    <ul className={style.category}>
      {list[0].categories.map((item) => (
        <li key={item.link}>
          <NavLink className={({ isActive }) => cn(style.link, isActive && style.linkActive)}
                   to={`${list[0].link}/${item.link}`}>{item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};