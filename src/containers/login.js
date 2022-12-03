// import Button from "../components/button"
import {useState} from 'react'
const Login =()=> {
  const [arr,setArr] = useState(['ram','hari','geeta','shyam']);
  const [inputText,setInputText] = useState('')
  const deleteItem =()=> {
  const removedArr =arr.filter(item=>{
       return item!=inputText
     })
     setArr(removedArr)
};


  const saveName=(e)=>{
   setInputText(e.target.value)
    
  }

  return (
    <>
    {arr.map((item,id)=> {
      return <li>{item}</li>;
    })}
  <button onClick ={() => deleteItem()}>delete</button>

  <input
        type="text"
        placeholder={'enter name you want to delete'}
        onKeyUp={saveName}
        
        ></input>
    
   </>
  );
};
  



export default Login;