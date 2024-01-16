
const Preview = (props: {html:any}) => {
  return (
    <div className="lg:w-1/2 max-h-[200px] lg:max-h-screen">
        <h2 className="bg-[#E5175D] px-3 py-1 rounded-t-lg text-white border-2 border-[#A8A7A7] lg:rounded-none  ">Previewer:</h2>
        <div id="preview" 
     dangerouslySetInnerHTML={{ __html: props.html }}
     className="resize-none w-full  h-[94%] lg:border-b-0 lg:rounded-none    outline-none px-3 py-2 rounded-b-lg bg-[#363636] border-2 text-white text-xs overflow-y-auto"
></div>
    </div>
  )
}

export default Preview