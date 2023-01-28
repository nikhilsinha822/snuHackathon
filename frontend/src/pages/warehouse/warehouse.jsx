import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Data from "../../data";
import "./wareHouse.css";


const WareHouse = ({ email }) => {
  //const baseURL = process.env.BASE_URL;
  const [WareHouse, setWareHouse] = useState({
    wareId: uuidv4(),
    email: email,
    Capacity: "",
    Country: "",
    freeSpace: "",
    storedProduct: [],
  });
  const [prods, setProds] = useState([]);
  const [prod, setProd] = useState({
    product: "",
    quantity: "",
  });
  const handlePrd = (e) => {
    const { name, value } = e.target;
    setProd({
      ...prod,
      [name]: value,
    });
  };
  const handleprdadd = () => {
    setProds([...prods, prod]);
    setProd({
      product: "",
      quantity: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWareHouse({
      ...WareHouse,
      [name]: value,
    });
    console.log(WareHouse);
  };
  const handlePost = () => {
    setWareHouse({ ...WareHouse, storedProduct: [...prods] });
    //console.log(WareHouse)
    axios.post(`${baseURL}/adware`, WareHouse).then((res) => {
      console.log(res);
    });
    setWareHouse({
      wareId: uuidv4(),
      Capacity: "",
      Country: "",
      freeSpace: "",
      storedProduct: [],
    });
    setProds([]);
  };
  // const handleAddWare = () => {
  //     axios.post(`${baseURL}/adware`,WareHouse)
  //     .then((res)=>{
  //         console.log(res)
  //     })
  // }
  return (
    <>
      <div className="wareParent">
        <div className="wareHouse">
        <h3>Warehouse Management</h3>
          <input
            name="Country"
            placeholder="Country"
            value={WareHouse.Country}
            onChange={handleChange}
            required
          />
          <input
            name="Capacity"
            placeholder="Capacity"
            value={WareHouse.Capacity}
            onChange={handleChange}
            required
          />
          <input
            name="freeSpace"
            placeholder="freeSpace"
            value={WareHouse.freeSpace}
            onChange={handleChange}
            required
          />
          {/* <button onClick={handleAddWare}>Submit</button> */}
          <select
            name="product"
            onChange={handlePrd}
            value={prod.product}
            placeholder="select product"
            required
          >
            <option value="none" hidden>
              Select an Option
            </option>
            {Data.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          <input
            type="number"
            placeholder="quantity"
            name="quantity"
            onChange={handlePrd}
            value={prod.quantity}
            required
          />
          <button onClick={handleprdadd}>Add Product</button>

          <button className="post" onClick={handlePost}>Post</button>
        </div>
        <ul>
          {prods.map((value) => {
            const { product, quantity } = value;
            return (
              <li>
                {product} of quantity {quantity}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WareHouse;
