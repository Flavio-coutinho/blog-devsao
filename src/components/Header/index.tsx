import styles from './styles.module.scss';
import Image from '../../../node_modules/next/image';
import logo from '../../../public/images/logo.png';
import { ActiveLink } from '../ActiveLink/index';


export function Header(){
    return(
        <header className={styles.headerContainer}>
           <div className={styles.headerContent}>
           <ActiveLink href="/" activeClassName={styles.active}>
            <a>
            <Image src={logo} alt="Blog Devs AO logo" />
            </a>
            </ActiveLink> 

            <nav>
                <ActiveLink href="/" activeClassName={styles.active}>
                    <a>Home</a>
                </ActiveLink> 
                <ActiveLink href="/posts" activeClassName={styles.active}>
                    <a>Blog</a>
                </ActiveLink> 
                <ActiveLink href="/sobre" activeClassName={styles.active}>
                    <a>Quem somos?</a>
                </ActiveLink> 
            </nav>

            <a className={styles.readyButton} type="button" href="https://github.com/"  >Comunidade</a>
           
           </div>
        </header>
    )
}