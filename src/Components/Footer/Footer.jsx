import { Container } from '../Layout/Container.jsx';
import style from './Footer.module.scss';
import { Category } from './Category.jsx';
import { Social } from './Social.jsx';
import { Contacts } from './Contacts.jsx';
import { Copyright } from './Copyright.jsx';
import { Development } from './Development.jsx';


export const Footer = () => {
  return (
    <footer>
      <Container className={style.container}>
        <Category />
        <Social />
        <Contacts />
        <Copyright />
        <Development />
      </Container>
    </footer>
  );
};