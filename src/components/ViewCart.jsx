import React, { useState } from 'react'
import Navcart from './Navcart'

const ViewCart = () => {
    const [data, setData] = useState(
        [
            {"id":"101","title":"T-shirt","description":"perfect","price":1500,"category":"Mens's clothing"},
            {"id":"102","title":"shirt","description":"perfect","price":100,"category":"Womens's clothing"},
            {"id":"103","title":"T-shirt","description":"perfect","price":500,"category":"Baby's clothing"}
        ]
    )
    return (
        <div>
            <Navcart />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                           {
                            data.map(
                                (value,index)=>{
                                    return  <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                                    <div class="card">
                                        <div class="card-body" >
                                            <img src={value.image} class="card-img-top" alt="..."></img>
                                            <h5 class="card-title">{value.id}</h5>
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.description}</p>
                                            <h5 class="card-title">{value.price}</h5>
                                            <h5 class="card-title">{value.category}</h5>
                                            <a href="#" class="btn btn-primary">Buy now</a>
                                        </div>
                                    </div>
                                </div>
                                }
                            )
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCart