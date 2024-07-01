const Card = ({img,judul,text}) =>{
    return(
        <>
        <div className="col" id="myproject">
                <div class="card mb-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{judul}</h5>
                    <p class="card-text">{text}</p>
                    <p class="card-text"><small class="text-body-secondary"></small></p>
                </div>
                </div>
            </div>
        </>
    )
 }

 export default Card