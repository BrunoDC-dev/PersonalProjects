

const Number = (props: {num:string,updateDisplay:Function , id:string }) => {
  return (
    <div id={props.id} onClick={()=>props.updateDisplay(props.num)} className="text-white  bg-[#4D4D4D] text-center rounded-md px-2 py-3 text-xl">
        <p>{props.num}</p>
    </div>
  )
}

export default Number