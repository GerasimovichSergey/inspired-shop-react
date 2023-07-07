import { Container } from '../Layout/Container.jsx';
import style from './Footer.module.scss';
import { Category } from './Category/Category.jsx';
import { Social } from './Social/Social.jsx';
import { Contacts } from './Contacts/Contacts.jsx';
import { Copyright } from './Copyright/Copyright.jsx';
import { Development } from './Development/Development.jsx';


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