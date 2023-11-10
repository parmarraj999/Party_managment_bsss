import './form.css'
import Overlay from '../../../component/overlay/overlay'
import Button from '../../../component/button'
import { useContext, useState } from 'react'
import { supabase } from '../../../module/Supabase'
import { ThemeSetup } from '../../../context/context'

function Form() {

  const themeValue = useContext(ThemeSetup);

  const [data,setData] = useState({
    name:"raj",
    des:"18"
  })

  // async function addData(xyz){
  //   const [data,error] = await supabase
  //   .from("party")
  //   .insert(xyz)

  //   if(error){
  //     console.log("error in database")
  //   }else{
  //     console.log("added successfully",data)
  //   }
  // }

  // console.log(addData(data))

  return (
  <div className={themeValue.theme ? "form-container bw" : "form-container bb"}>
    <div className='form-wrapper' style={themeValue.theme ? {background:"rgba(0,0,0,0.2)"} : {background:"rgba(255,255,255,0.1)"}}>
      {/* <Overlay/> */}
      <div className='form'>
        <h1>Organize Your Dream Party </h1>
      </div>
    </div>  
    <div className='form-btn'> 
      <Button text="Join party" arrow={true} width="200px" />
    </div>
  </div>
  )
}

export default Form