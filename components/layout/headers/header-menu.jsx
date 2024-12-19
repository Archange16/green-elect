import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/">A propos de Nous </Link> 
                </li>
                <li className="menu-item-has-children"><Link href="/">Services </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/">Portfolio </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/">Blog</Link>
                </li>
                <li><Link href="/">Contactez-Nous</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;