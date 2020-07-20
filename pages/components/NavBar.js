import Link from 'next/link';
import Head from 'next/head';

export default function NavBar() {
    return (
        <div>
            <Head>
                <title>Bit-Coinz</title>
                <link rel="icon" href={"/images/nlogo.jpg"} />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            </Head>
            <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="#">Bit-Coinz</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-light">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link text-light">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
