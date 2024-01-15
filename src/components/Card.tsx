import React, { useState } from 'react'
import SocialMediaButton from './SocialMediaButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Card = (props: { color: string, quote: string, author: string ,  setQuote: Function, randomColor:Function}) => {
    const [searching, setSearching] = useState(false)
    const fetchNewQuote = async () => {
        props.randomColor()
        setSearching(true)
        try {
            const response = await fetch('https://api.quotable.io/quotes/random')
            const data = await response.json()
            props.setQuote(data[0])
            setSearching(false)
        } catch (error) {
            console.error('Error fetching new quote:', error)
        }
    }

    return (
        <section className='bg-[#ffff] px-7 py-8 rounded-lg transition-all ease-in-out max-w-[600px]' id='quote-box'>
            <div id='text' className='flex items-top gap-[2px] pr-2 md:pt-4'>
                <FontAwesomeIcon icon={faQuoteLeft} style={{ color: props.color }} className='text-xl transition-colors ease-in-out duration-500 md:text-[30px]' />
                <h1 style={{ color: props.color }} className={'text-center font-medium text-sm  transition-all duration-500 ease-in-out md:text-2xl ' + (searching?'opacity-0':'opacity-100')}>{props.quote}</h1>
            </div>

            <p id='author' className={'text-right text-[12px] font-light py-2 pr-2 transition-all duration-500  ease-in-out md:text-lg md:py-4  '  + (searching?'opacity-0':'opacity-100')} style={{ color: props.color }}>- {props.author}</p>

            <div className='flex items-center justify-between md:pb-4'>
                <div className='flex items-center gap-1 md:gap-3'>
                    <SocialMediaButton socialMedia='twitter' color={props.color} quote={props.quote} />
                    <SocialMediaButton socialMedia='tumblr' color={props.color} quote={props.quote} />
                </div>
                <button id='new-quote' className='p-2 text-xs rounded-md text-white transition-colors ease-in-out duration-500 md:text-[20px] md:p-4 
                ' style={{ backgroundColor: props.color }} onClick={fetchNewQuote}>
                    New Quote
                </button>
            </div>
        </section>
    )
}

export default Card