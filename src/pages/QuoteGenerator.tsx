import { useEffect , useState} from 'react'
import Card from '../components/Card'


interface Quote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
}

function QuoteGenerator() {
  const [color, setColor] = useState<string>('#342224')
  const [quote, setQuote] = useState<Quote>({
    _id: '',
    content: '',
    author: '',
    authorSlug: '',
    length: 0,
    tags: []
  }) // Fix the type of quote

  useEffect(() => {
    randomColor()
    fetch('https://api.quotable.io/quotes/random')
      .then((response) => response.json())  
      .then((data) => setQuote(data[0]))
  }, []) 
  //give me a function that generates a random color in hex 
  const randomColor = () => {
    let color = '#'
    const hexValues = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
      color += hexValues[Math.floor(Math.random() * 16)]
    }
    setColor( color)
  }
  return (
    <main className='w-full h-screen  flex flex-col items-center justify-center p-5 transition-colors duration-500 ease-in-out'style={{ backgroundColor: color }}>
      <Card color={color} author={quote.author} quote={quote.content} setQuote={setQuote} randomColor={randomColor}/> 
      <a href="https://portafolio-personal-lime.vercel.app/" className='text-white text-xs pt-3 md:text-lg'>By: Bruno De Cruz</a>
    </main>
  )
}
export default QuoteGenerator