import { useEffect, useState } from "react"
// import { getCats } from "../Async/Async";


export const Main = () =>{
    const [catsArray,setCatsArray] = useState([])
    
    useEffect( () => {
        async function getCats(){
            const response = await fetch('http://sb-cats.herokuapp.com/api/2/<111LegendaryDude111>/show')
            .then(resp => resp.json())
            .then(data => {
                console.log(data.data)
                let arrayWithCats = data.data;
                return arrayWithCats;
            })
            .catch((error)=> alert(`Error${error}`))
        }
        setCatsArray(getCats);
    },[])


    return (
        <>
        {
            catsArray.map((el,i) => {
                // eslint-disable-next-line no-unused-expressions
                `<div key=${i} class="card" style="width: 18rem;">
                    <img className="card-img-top" src=${el.img_link} alt="Card image cap">
                    <div className="card-body">
                        <h5 class="card-title">${el.name}</h5>
                        <p class="card-text">${el.description}</p>
                        <button className="btn btn-primary">Change</button>
                    </div>
                </div>
                `

            })
        }
        </>
    )
}