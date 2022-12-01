

export const MainLS = () => {
let catsArray = JSON.parse(localStorage.getItem('cats'));
console.log(catsArray)


    return(
        <main>
        {
            catsArray.map ((el,i) => (
               <div key={i} id={el.id}class="card" style="width: 18rem;">
                    <img className="card-img-top" src={el.imglink} alt="Card image cat" />
                    <div className="card-body">
                        <h5 className="card-title">{el.name}</h5>
                        <p className="card-text">{el.description}</p>
                        <button className="btn btn-primary">Change</button>
                    </div>
                </div>
                
                ))
        }
        </main>
    )
}