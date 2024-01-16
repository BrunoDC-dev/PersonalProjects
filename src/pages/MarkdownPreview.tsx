import  { useState } from 'react'
import Editor from '../components/MarkDownPreview/Editor'
import Preview from '../components/MarkDownPreview/Preview'
import { marked } from 'marked'
const MarkdownPreview = () => {
    const defaultMarkdownText = `
# Heading 1

## Heading 2

This is a [link](https://www.example.com).

Inline code: \`const example = "Hello, World!"\`

Code block:

\`\`\`javascript
function greet() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Example Image](https://via.placeholder.com/150)

**Bolded text**
`;
    const [markdown, setMarkdown] = useState(defaultMarkdownText);
    const html = marked(markdown);
  
   
  return (
    <main className='w-full h-screen bg-[#363636] px-3 py-8 flex flex-col gap-3 lg:px-0 lg:py-2'>
        <div className='w-full flex flex-col '>
            <h1 className='text-center text-white text-xl p-1'>Markdown Live Previewer</h1>
        </div>
        <div className='flex flex-col pt-2 lg:flex-row gap-10 h-full lg:gap-0'>
            <Editor setMarkdown={setMarkdown} markdown={markdown}/>
            <Preview html={html}/>
        </div>
        <a href="https://portafolio-personal-lime.vercel.app/" className='text-white text-[8px] py-2 text-center lg:hidden'>By: Bruno De Cruz</a>
    </main>
  )
}

export default MarkdownPreview