import React, { useEffect, useState } from 'react'
import Navcart from './Navcart'
import axios from 'axios'

const ViewLive = () => {
    const [data, setData] = useState({"products":[]})
    const fetchData=()=>{
        axios.get("https://dummyjson.com/products").then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navcart/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.products.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <img src={value.images} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.price}</p>
                                                    <p class="card-text">{value.category}</p>
                                                    <a href="#" class="btn btn-primary">Buy</a>
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

export default ViewLive