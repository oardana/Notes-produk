import Card from "../component/card"
export default function Aboutme(){
    const items =[
        {
            img:'https://solarenergi.id/wp-content/uploads/2022/01/bank-jateng-700x400.jpg',
            judul:'Website Bank',
            text:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus.',
            
        },
        {
            img:'https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/10/Contoh-Website-Sekolah-SMAN-8-Yogyakarta-1024x576.jpg',
            judul:'Website Sekolah',
            text:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus.',
        },
        {
            img:'https://stokcoding.com/wp-content/uploads/2021/02/Aplikasi-Reservasi-Rumah-Sakit-Berbasis-Web-PHP.png',
            judul:'Website Rumah Sakit',
            text:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus.',
        },
        {
            img:'https://www.jagoanhosting.com/blog/wp-content/uploads/2023/09/contoh-web-perusahaan-mebiso.png',
            judul:'Website Perusahaan',
            text:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus.',
        },
        {
            img:'https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2017/10/Mobil-123-Screenshot.jpg',
            judul:'Website Online Shop',
            text:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus.',
        },
        {
            img:'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/11/cover-8.webp?ssl=1&quality=80&w=f',
            judul:'Website GAME',
            text:'lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus.',
        }
    ];
    return(
        <div className="about">
            <div className="container pb-5">
                <div className="row">
                    <div className="col">
                        <hr/>
                        <h1 className="text-uppercase ">Hello </h1>
                        <h1 className="text-uppercase ">I AM OKI SEPTIARDANA</h1>
                        <h1 className="text-uppercase ">WEB DEVELOPER</h1>
                        <button className="btn btn-success mt-5"><a href="#myproject" className="btn btn-success ">My Project</a></button>
                    </div>
                    <div className="col">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/010/315/362/small_2x/programmers-concept-with-flat-design-free-vector.jpg" alt="" height="300px"  />
                    </div>
                </div>
            </div>
            <div className="text p-5">
                <h1 className="text-center"> About Me </h1>
                <p className="pt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates eum? Itaque minima quod iusto illum soluta, beatae numquam praesentium excepturi labore dolores aliquam, eaque voluptas et autem, veritatis esse eum totam amet vel ex. Facilis commodi optio similique molestias veniam odio, saepe sequi incidunt ipsa dolor nam magnam ad?</p>
            </div>
            <div className="project">
                <h1 className="text-center">My Project</h1>
                 <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 kartu">
                    {items.map((item,index)=>(
                        <Card key={index} img={item.img} judul={item.judul} text={item.text}/>
                    ))}            
                </div>
            </div>
        </div>
    )
}