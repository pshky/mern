
import {useState} from'react'
const Login =()=> {
  const [arr,setArr]=useState(['ram','hari','shyam','geeta'])
  const popLastItem=()=>{
    // backup is created as useState can't be manipulated with pop()
    const backup=[...arr]
    backup.pop()
    setArr(backup)
  }
  return (
    <>
    {arr.map((item,id)=>{
       return <li>{item}</li>
    })   
    }
    <button onClick={()=>popLastItem()}>POP</button>
   </>
  );
}
export default Login;