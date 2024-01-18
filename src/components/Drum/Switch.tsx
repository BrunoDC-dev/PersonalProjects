import { useState } from "react"

const Switch = (props: {topic:string,power:boolean , setFunction: Function}) => {
    const [clicked, setClicked] = useState(false)
    const clickHandler = () => {
        setClicked(!clicked)
        if (props.power) {
            props.setFunction(!clicked)
        }else{
            props.setFunction(clicked?  'Heater kit': 'Smooth Piano Kit')
        }

    }
  return (
    <div onClick={clickHandler}>
        <p className="text-center lg:text-2xl">{props.topic}</p>
        <div className="bg-black w-[50px] rounded-md h-[25px] flex 
        items-center px-1 py-2 lg:w-[75px] lg:h-[40px]">
            <div className='w-[20px]  h-[16px] rounded-sm transition-all ease-in-out duration-300 lg:w-[34px] lg:h-[30px]'  
            style={    props.power?  
            clicked? 
            {background:'green',
            transform:'translateX(90%)'}:
            {background:'red',
            transform:'translateX(0rem)'}: 
            clicked ?
            {background:'blue',
            transform:'translateX(90%)'}: 
            {background:'blue',
            transform:'translateX(0rem)'}}>

            </div>
        </div>
        
    </div>
  )
}

export default Switch