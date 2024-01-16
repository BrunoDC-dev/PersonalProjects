


const Editor = (props: {setMarkdown : Function , markdown:string}) => {
    const handleInputChange = (e: { target: { value: any; }; }) => {
        props.setMarkdown(e.target.value);
    };
    
    return (
    <div className="lg:w-1/2 max-h-[200px] lg:max-h-screen">
        <h2 className="bg-[#E5175D] px-3 py-1 rounded-t-lg text-white border-2 border-[#A8A7A7] lg:rounded-none ">Edit:</h2>
        <textarea value={props.markdown}
    name=""
    id="editor"
    cols={100}
    rows={10}
    onChange={handleInputChange}
    className="resize-none w-full  h-[94%]   outline-none px-3 py-2 rounded-b-lg bg-[#363636] border-2 lg:rounded-none lg:border-b-0     text-white text-xs "  // Apply Tailwind CSS classes
  ></textarea> 
    </div>
  )
}

export default Editor