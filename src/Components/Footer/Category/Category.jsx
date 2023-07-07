import commonStyle from '../Footer.module.scss';
import style from './Category.module.scss'
import cn from 'classnames';


export const Category = () => {
  return (
    <div className={style.category}>
      <h2 className={cn(commonStyle.title, style.categoryTitle)}>Каталог</h2>
      <div className={style.categoryList}>
        <ul className={style.categorySublist}>
          <h3 className={style.categorySubtitle}>Женщины</h3>
          <li className={commonStyle.link}>
            <a href="#">Бюстгальтеры</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Трусы</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Носки</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Халаты</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Термобелье</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Пижамы</a>
          </li>
        </ul>
        <ul className={style.categorySublist}>
          <h3 className={style.categorySubtitle}>Мужчины</h3>
          <li className={commonStyle.link}>
            <a href="#">Трусы</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Носки</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Халаты</a>
          </li>
          <li className={commonStyle.link}>
            <a href="#">Термобелье</a>
          </li>
        </ul>
      </div>
    </div>
  );
};