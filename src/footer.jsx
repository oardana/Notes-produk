export default function Footer(){

    return(
        <div className="container-fluid footer p-5">
            <div className="container ">
                <div className="row align-items-center ">
                    <div className="col-md-4">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/daftarproduk">Daftar Produk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/tentangsaya">Tentang Saya</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/kontak">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 text-lg-center site-logo order-1 order-lg-2 mb-3 mb-lg-0">
                        <p>OKI SEPTIARDANA</p>
                        <h5>Made by</h5>
                    </div>
                    <div className="column-3 col-lg-4 text-lg-left order-2 order-lg-2">
                        <p className="text-dark">
                            &copy; 2024. All Right Reserved.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}