"use client"
import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSelector, useDispatch } from 'react-redux'
import { setData } from "../productSlice";


export default function Main() {
    const products = useSelector((state) => state.products.value)
    const dispatch = useDispatch()

    // const [products, setProducts] = useState([])
    useEffect(()=>{

        fetch("https://dummyjson.com/products").then(data=>data.json()).then((res)=>{
            dispatch(setData(res.products))
        })
    },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((item)=>{
            return  <Product item={item} key={item.id}/>
        })}


    </div>
  );
}
