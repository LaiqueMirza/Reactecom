import React, {useEffect, useState} from 'react';
import "./renderSearchResult.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import Products from '../product/products/products';

const RenderSearchResult = () => {
  const userSearchedValue = useSelector(state => state.searchValue);
console.log(userSearchedValue);

  const [data, setdata] = useState({})
  const [loading, setLoading] = useState(true);

    useEffect(() => {
          axios
          .get(`/products/${userSearchedValue}`)
          .then((res) => setdata(res.data))
          .catch((err) => console.log(err));
          setLoading(false);

      }, [userSearchedValue]);
    console.log(data);



    return (   <div className="shopDiv">
      {loading && <h1>Loading...</h1>}
      
<section className="clothing-section">

<h3 className="header-clothing">Your Searched Result is</h3>

<div className="clothing" id="clothing">
{data.length ? data?.map((product) => (
        <Products
         data={product} 
        key={product.id}
        />
      )) : <h2>There is no data</h2>}
</div>
    

</section>
      
    </div>);
}
 
export default RenderSearchResult;