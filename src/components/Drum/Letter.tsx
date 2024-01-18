import { useState, useEffect } from "react"

const Letter = (props: { letter: string, power: boolean, soundURL: string }) => {
    const [clicked, setClicked] = useState(false)

    const playSound = () => {
        setClicked(true)
        let audio = new Audio(props.soundURL)
        console.log(props.power)
        if (props.power) {
            audio.play()
        }
        setTimeout(() => {
            setClicked(false)
        }, 250)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === props.letter || event.key === props.letter.toLowerCase()) {
          playSound();
        }
      };
    
      useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
    
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [props.power]);
    
    return (
        <div
            onClick={playSound}
            id={props.letter}
            className="drum-pad bg-[grey] py-2 rounded-md shadow-xl  border-2 border-stone-700 transition-colors ease-in-out 
            lg:flex lg:items-center lg:justify-center lg:py-4 lg:px-2 lg:shadow-2xl lg:border-4 lg:border-stone-700"
            style={clicked ? { background: 'orange' } : { background: 'grey' }}
        >
            <p className="text-center lg:text-2xl lg:font-bold">{props.letter}</p>
        </div>
    )
}

export default Letter