import commonStyle from '../Footer.module.scss';
import style from './Contacts.module.scss';


export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <p className={commonStyle.title}>
        <a className={commonStyle.link} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
      </p>
      <p className={commonStyle.title}>
        <a className={commonStyle.link} href="tel:89304902620">8 930 490 26 20</a>
      </p>
    </div>
  );
};