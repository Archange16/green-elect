import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">A propos de Nous </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/services">Services </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Portfolio </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                </li>
                <li><Link href="/contact">Contactez-Nous</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;