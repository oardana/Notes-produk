import { useState } from "react"
export default function Contact(){
    const [email, setEmail] = useState('');
    const [notelepon, setNotelepon] = useState('');
    const [kirim, setKirim] = useState(false);
    const [name, setName] = useState('');
    const [textarea, setTextarea] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        if(!email || !notelepon || !name || !textarea){
            return alert('Tidak boleh kosong');
        }

        if(!validasiEmail(email)){
            return alert('Email tidak valid');
        }

        if(!validasiNotelepon(notelepon)){
            return alert('No telepon harus 12 Angka');
        }

        setKirim(true);
        alert('berhasil dikirim');
        setNotelepon('');
        setEmail('');
        setName('');
        setTextarea('');
    }

    const validasiEmail = (email) =>{
        const validasi = /\S+@\S+\.\S+/;
         return validasi.test(email);
    };

    const validasiNotelepon = (notelepon) =>{
        return notelepon.length >= 12;
    };

    return(
        <div className="contact container-fluid ">
            <div className="container">

                <h1 className="text-center p-5">Anda Punya Pertanyaan ?</h1>
                <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                    <div className="col">
                        <img src="https://cdn-icons-png.freepik.com/512/9810/9810098.png"  alt="website" />
                    </div>
                    <div className="col">
                        <div className="container bg-success">
                            <h1 className="text-center text-white p-3">Hubungi Saya</h1>
                            <form action="" onSubmit={submit}>
                                <div className="input-group">
                                    <input type="text" class="form-control mb-3 w-25" name="name" value={name} onChange={(e)=> setName(e.target.value)} id="name" placeholder="Name" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Silahkan Isi Nama Lengkap Anda"/>
                                </div>
                                <div className="input-group">
                                    <input type="text" class="form-control mb-3" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email"/>
                                
                                </div>
                                <div class="input-group">
                                    <input type="text" class="form-control mb-3" value={notelepon} onChange={(e) => setNotelepon(e.target.value)} name="notelepon" id="notelepon" placeholder="No telepon"/>
                                    <span id="noteleponError" class="error-message"> </span>
                                </div>
                                <div class="form-floating">
                                    <textarea  class="form-control mb-3" name="pesan" id="pesan" value={textarea} onChange={(e) => setTextarea(e.target.value)} placeholder="Pesan" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Silahkan isi pesan anda disini MAX 100 character"></textarea>
                                    <label for="">Pesan</label>
                                </div>
                                <button type="submit" key={Date.now()} class="btn btn-light mb-3" >{kirim} Kirim</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}