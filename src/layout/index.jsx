import { useState,useEffect } from "react";

export default function Content(){
    const [produk, setproduk] = useState([]);
    const [namaProduk, setnamaProduk] = useState('');
    const [hargaproduk, sethargaproduk] = useState('');
    const [gambarProduk, setgambarProduk] = useState('');
    const [gambar, setgambar] = useState([]); 

    const tambahProduk = () => {
        if (namaProduk && hargaproduk && gambar) {
        const produkId = produk.length > 0 ? produk[produk.length - 1].id + 1 : 1;
        const produkBaru = {
            id: produkId,
            nama: namaProduk,
            harga: parseInt(hargaproduk),
            gambar: URL.createObjectURL(gambar),
            stock: 0,
            jual: 0,
        };
        setproduk([...produk, produkBaru]);
        setnamaProduk('');
        sethargaproduk('');
        setgambarProduk('');
        setgambar([]);
        } else {
        alert('Mohon lengkapi semua kolom untuk menambah produk baru.');
        }
    };

    useEffect(() =>{
        alert('Selamat datang');
    },[]);

    const tambahStock = (produkId) => {
        const updateProduk = produk.map(produk =>
        produk.id === produkId ? { ...produk, stock: produk.stock + 1 } : produk
        );
        setproduk(updateProduk);
    };

    const penjualanProduk = (produkId) => {
        const updateProduk = produk.map(produk =>
        produk.id === produkId ? { ...produk, stock: produk.stock - 1, jual: produk.jual + 1 } : produk
        );
        setproduk(updateProduk);
    };

    const hapusProduk = (produkId) => {
        const updateProduk = produk.filter(produk => produk.id !== produkId);
        setproduk(updateProduk);
    };

    const tambahGambar = (e) => {
        const file = e.target.files[0];
        if (file) {
        setgambar(file);
        setgambarProduk(URL.createObjectURL(file));
        }
    };

    const totalPenjualan = produk.reduce((acc, produk) => acc + produk.jual, 0);
    const totalStok = produk.reduce((total, produk) => total + produk.stock, 0);
    const totalHarga = produk.reduce((total, produk) => total + (produk.harga * produk.stock), 0);
    const totalHargaTerjual = produk.reduce((total, produk) => total + (produk.harga * produk.jual), 0);


    return(
        <div className="content container-fluid p-2 ">
           <div className="container bg-success p-4">
            <h2 className="text-center text-light">Manajemen Produk</h2>
                <div className='container form-data'>
                    <h3 className="p-3 text-light">Input Produk Baru</h3>
                    <input className='form-control mb-3 w-50' type="text" placeholder="Nama Produk" value={namaProduk} onChange={(e) => setnamaProduk(e.target.value)}/>
                    <input className='form-control mb-3 w-50'  maxlength="10" type="text" placeholder="Harga" value={hargaproduk} onChange={(e) => sethargaproduk(e.target.value)}/>
                    <input type="file" onChange={tambahGambar} key={Date.now()} className='form-control w-50 mb-3'/>
                    <img src={gambarProduk} className='w-25 align-items-lg-start' width="50px"/>
                    <button onClick={tambahProduk} className='btn mb-5'>Tambah Produk</button>
                </div>

                    <h3 className="text-center">Daftar Produk</h3>
                    <h3 className="pb-1">Total Terjual: {totalPenjualan}</h3>
                    <h3 className="pb-1">Total Stock: {totalStok}</h3>
                    <h3 className="pb-1">Total Harga Stock: {totalHarga}</h3>
                    <h3 className="pb-5">Total Harga Penjualan: {totalHargaTerjual}</h3>
                    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nama Produk</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Gambar Produk</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {produk.map((produk) => (
                            <tr key={produk.id}>
                            
                            <td>{produk.nama}</td>
                            <td>{produk.harga}</td>
                            <td><img src={produk.gambar} alt={produk.nama} style={{ width: '100px', height: '100px', objectFit: 'cover' }} /></td>
                            <td>{produk.stock}</td>
                            <td>
                                <button className='btn btn-success m-2' onClick={() => tambahStock(produk.id)}><span className="material-symbols-outlined">note_add</span></button>
                                <button className='btn btn-success m-2' onClick={() => penjualanProduk(produk.id)} disabled={produk.stock === 0}><span className="material-symbols-outlined">shopping_cart</span></button>
                                <button className='btn btn-danger m-2' onClick={() => hapusProduk(produk.id)}><span className="material-symbols-outlined">delete</span></button>
                            </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
           </div>
        </div>
    )
}