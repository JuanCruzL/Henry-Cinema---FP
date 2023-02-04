import React from "react";
import '../HomePaginated/HomePaginated.css';

export default function Paginated({peliculas,moviesPerPage,paginated}){
    const pageNumbers=[]
    for (let i = 0; i<Math.ceil(peliculas/moviesPerPage); i++) {
        pageNumbers.push(i+1)
    }

    return(
        <div className="container-paginated">
            <ul className="paginated">
                {
                pageNumbers && 
                pageNumbers.map(number=>{
                        return(
                            <li className="number" key={number}>
                                <button className="buttonPage" onClick={()=>paginated(number)}>{number}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}