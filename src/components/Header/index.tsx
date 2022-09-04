import styles from './styles.module.scss';
import Image from '../../../node_modules/next/image';
import logo from '../../../public/images/logo.png';
import 'module-alias/register';
import { ActiveLink } from '../ActiveLink/index';


export function Header(){
    return(
        <header className={styles.headerContainer}>
           <div className={styles.headerContent}>
            <a>
             <Image src={logo} alt="Blog Devs AO logo" />
            </a>

            <nav>
                <ActiveLink href="/" activeClassName={styles.activeLink}>
                    <a>Home</a>
                </ActiveLink> 
                <ActiveLink href="/posts" activeClassName={styles.activeLink}>
                    <a>Blog</a>
                </ActiveLink> 
                <ActiveLink href="/sobre" activeClassName={styles.activeLink}>
                    <a>Quem somos?</a>
                </ActiveLink> 
            </nav>

            <a className={styles.readyButton} type="button" href="https://github.com/"  >Comunidade</a>
           
           </div>
        </header>
    )
}