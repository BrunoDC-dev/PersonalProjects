
const Function = (props:{
    updateDisplay:Function
    symbol:string,
    id:string
}) => {
  return (
    <div id={props.id} className="text-white bg-[#666666] text-center flex items-center justify-center text-2xl rounded-md" onClick={()=>props.updateDisplay(props.symbol)}>
        <p>{props.symbol}</p>
    </div>
  )
}

export default Function