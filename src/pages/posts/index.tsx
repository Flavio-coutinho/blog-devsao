import Head from '../../../node_modules/next/head';
import styles from './styles.module.scss';
import Link from '../../../node_modules/next/link';
import Image from '../../../node_modules/next/image';
import thumbImg from '../../../public/images/11.2 thumb.png';
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from '../../../node_modules/react-icons/fi/index';

export default function Posts(){
    return(
        <>
          <Head>
            <title>Blog | DevsAo</title>
            </Head>  
            <main className={styles.container}>
                <div className={styles.posts}>
                    <Link href="/">
                        <a>
                            <Image 
                            src={thumbImg} 
                            alt="Post título 1"
                            width={720}
                            height={410}
                            quality={100}
                            />
                            <strong>Desenvolvedor BACKEND</strong>
                            <time>21 de Maio 2022</time>
                            <p>Free. Cross-platform. Open source. A developer platform for building all your apps.</p>
                        </a>
                    </Link>
                    <div className={styles.buttonNavigate}>
                        <div>
                            <button>
                            <FiChevronLeft size={25} color="#fff"/>
                            </button>
                            <button>
                            <FiChevronsLeft size={25} color="#fff"/>
                            </button>
                        </div> 

                        <div>
                            <button>
                            <FiChevronsRight size={25} color="#fff"/>
                            </button>
                            <button>
                            <FiChevronRight size={25} color="#fff"/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}