import style from './Development.module.scss';


export const Development = () => {
  return (
    <div className={style.development}>
      <div className={style.developmentList}>
        <p>Designer: Anastasia Ilina</p>
        <p>Developer: Gerasimovich Sergey</p>
      </div>
    </div>
  );
};