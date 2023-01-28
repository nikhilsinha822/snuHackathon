import axios from 'axios'
import { useEffect, useState } from 'react';
import './home.css'

const Home = ({email}) => {
const [category,setCategory] = useState([])
const [comodity,setComodity] =  useState([])
const [temp,setTemp] = useState({
    Comodity:"",
    quantity:""
})
const baseURL = "http://localhost:5000";
useEffect(()=>{
    axios.post(`${baseURL}/shipmentuser/category`).then((res)=>{
        setCategory(res.data)
    });
}, []);

const handleChange = (e) => {
    const {name,value}=e.target
    setTemp({
        ...temp,
        [name]: value
    })
}
const handlePOST = () => {

    axios.post(`${baseURL}/shipmentuser/search`,temp).then((res)=>{
        console.log(res)
    });

}
const handleButton = (e) => {

    axios.post(`${baseURL}/shipmentuser/comodity`,{Category: e.target.value}).then((res)=>{
        setComodity(res.data)
        //console.log(temp)
        console.log(res)
    })
  //console.log(comodity)
}
return <>
    <div className="buttonlist">
    {category.map((value,index)=>{
        return <button key={index} 
        onClick={handleButton} 
        value={value}>{value}</button>
    })}
    </div>
    <select onChange={handleChange}>
        {comodity.map((value,index)=>{return <option key={index} value={value}>{value}</option>})}       
    </select>

    <input type="number" onChange={handleChange} name="quantity"/>
    <button onClick={handlePOST}>Submit</button>   
</>
}

export default Home