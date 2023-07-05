import style from '/src/Components/Footer/Footer.module.scss';
import cn from 'classnames';


export const Category = () => {
  return (
    <div className={style.category}>
      <p className={cn(style.title, style.categoryTitle)}>Каталог</p>
      <div className={style.categoryList}>
        <ul className={style.categorySublist}>
          <p className={style.categorySubtitle}>Женщины</p>
          <li className={style.link}>
            <a href="#">Бюстгальтеры</a>
          </li>
          <li className={style.link}>
            <a href="#">Трусы</a>
          </li>
          <li className={style.link}>
            <a href="#">Носки</a>
          </li>
          <li className={style.link}>
            <a href="#">Халаты</a>
          </li>
          <li className={style.link}>
            <a href="#">Термобелье</a>
          </li>
          <li className={style.link}>
            <a href="#">Пижамы</a>
          </li>
        </ul>
        <ul className={style.categorySublist}>
          <p className={style.categorySubtitle}>Мужчины</p>
          <li className={style.link}>
            <a href="#">Трусы</a>
          </li>
          <li className={style.link}>
            <a href="#">Носки</a>
          </li>
          <li className={style.link}>
            <a href="#">Халаты</a>
          </li>
          <li className={style.link}>
            <a href="#">Термобелье</a>
          </li>
        </ul>
      </div>
    </div>
  );
};