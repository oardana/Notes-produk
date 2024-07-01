import { Link } from "react-router-dom"
export default function Header () {

    return(
        <div className="container-fluid header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/">
                        <img src="https://i.pinimg.com/736x/1d/f2/66/1df26605585543ec22c1a58f633c0db2.jpg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-underline">
                            <li className="nav-item text-dark">
                                    <Link className="nav-link" to="/daftarproduk">Daftar Produk</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/tentangsaya">Tentang Saya</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/kontak">Contact</Link>
                                </li>
                            </ul>
                        </div>
                </nav>
            </div>
        </div>
    )
}