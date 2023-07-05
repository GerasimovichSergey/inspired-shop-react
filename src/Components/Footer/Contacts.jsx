import style from '/src/Components/Footer/Footer.module.scss';


export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <p className={style.title}>
        <a className={style.link} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
      </p>
      <p className={style.title}>
        <a className={style.link} href="tel:89304902620">8 930 490 26 20</a>
      </p>
    </div>
  );
};