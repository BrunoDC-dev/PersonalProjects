import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faTumblr } from '@fortawesome/free-brands-svg-icons'

const SocialMediaButton = (props: { socialMedia: string , color:string , quote:string}) => {
    let socialMediaIcons: { [key: string]: any } = {
        'twitter': faTwitter,
        'tumblr': faTumblr
    }
    let socialMediaUrls: { [key: string]: string } = {
        'twitter': `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(props.quote)}`,
        'tumblr': `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(props.quote)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
    }
    return (
        <a id={props.socialMedia + '-quote'} href={socialMediaUrls[props.socialMedia]} target='_blank'>
            
        <div className='w-[28px] h-[28px] flex items-center justify-center rounded-sm transition-colors ease-in-out duration-500 md:w-[45px] md:h-[45px]' style={{ backgroundColor: props.color }}>
            <FontAwesomeIcon className='text-white md:text-xl' icon={socialMediaIcons[props.socialMedia]} />
            </div>
        </a>
    )
}

export default SocialMediaButton