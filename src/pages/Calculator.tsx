import { useState } from "react"
import Function from "../components/Calculator/Function"
import Number from "../components/Calculator/Number"

const Calculator = () => {
const [display, setDisplay] = useState("0")
const[result, setResult] = useState("")
const handleInput=(input:string)=>{  
  if(input==="AC"){
    setDisplay("0")
    setResult("")
  }
  else if(input==="+"||input==="-"||input==="x"||input==="/"){
    let lastChar = display[display.length-1]
    if(lastChar==="+"||lastChar==="-"||lastChar==="x"||lastChar==="/"){
      setDisplay(display.slice(0,display.length-1)+input)
    }
    else{
      setDisplay(display+input)
    }
  }else if(input==="."){
   let lastChar = display[display.length-1]
    if(lastChar==="+"||lastChar==="-"||lastChar==="x"||lastChar==="/"){
      setDisplay(display+"0"+input)
    }
    else{
      setDisplay(display+input)
    }
  }
  else{
    if(display==="0"){
      setDisplay(input)
    }else{
      setDisplay(display+input)
    }
  }

}
const calculate=()=>{
  let lastChar = display[display.length-1]
  if(lastChar==="+"||lastChar==="-"||lastChar==="x"||lastChar==="/"){
    setDisplay(display.slice(0,display.length-1))
  }
  setResult(display)
  setDisplay(eval(display))
}
  return (
    <main className="bg-[#C2C2D6] h-screen flex flex-col items-center justify-center">
    <div className="bg-black w-5/6 rounded-xl flex flex-col justify-end items-end px-3 pb-4 overflow-auto max-w-[360px]" >
            <p className="h-[29px] text-orange-500 pt-2">{result}</p>
            <p className="text-white text-2xl" id="display">{display}</p>
            <div className="grid grid-cols-4 grid-rows-5 gap-1 w-full">
                <div id="clear" className="bg-[#AC3939] text-xl col-span-2 rounded-md flex items-center justify-center" onClick={()=>handleInput("AC")}>
                <p className="text-white  text-center">AC</p>
                </div>
                <Function symbol={"/"} updateDisplay={handleInput} id="divide"/>
                <Function symbol={"x"} updateDisplay={handleInput} id="multiply"/>
                <Number num={"7"} id="seven" updateDisplay={handleInput}/>
                <Number num={"8"}id="eight" updateDisplay={handleInput}/>
                <Number num={"9"} id="nine" updateDisplay={handleInput}/>
                <Function symbol={"-"} updateDisplay={handleInput} id="subtract"/>
                <Number num={"4"} updateDisplay={handleInput} id="four"/>
                <Number num={"5"} updateDisplay={handleInput} id="five"/>
                <Number num={"6"} updateDisplay={handleInput} id="six"/>
                <Function symbol={"+"} updateDisplay={handleInput} id="add"/>
                <Number num={"1"} updateDisplay={handleInput} id="one"/>
                <Number num={"2"} updateDisplay={handleInput} id="two"/>
                <Number num={"3"} updateDisplay={handleInput} id="three"/>
                <div id="equals" className="row-span-2 bg-[#004466] flex items-center justify-center rounded-md text-3xl" onClick={calculate}>

                <p className="text-white  rounded-md   text-center">=</p>
                </div>
                <div className="col-span-2">

                <Number num={"0"} id="zero" updateDisplay={handleInput}/>
                </div>
                <Number num={"."} id="decimal" updateDisplay={handleInput}/>
            </div>
        </div>
        <a href="https://portafolio-personal-lime.vercel.app/" className='text-white text-xs pt-3 md:text-lg'>By: Bruno De Cruz</a>
    </main>
  )
}

export default Calculator