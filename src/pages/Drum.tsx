import { useState } from "react"
import Letter from "../components/Drum/Letter"
import Switch from "../components/Drum/Switch"


const Drum = () => {
  const [mode, setMode] = useState("Heater kit")
  const [power, setPower] = useState(false)

  return (
    <main id="drum-machine" className="w-full h-screen bg-[#8d8d8d] flex flex-col items-center justify-center">
      <section  id="display"className="bg-[#B3B3B3] flex flex-col-reverse items-center justify-center border-4 border-[orange]
      rounded-xl w-5/6 py-5 gap-4 lg:flex-row lg:px-6 lg:h-1/2 lg:max-w-[860px]">
        <div  className="grid grid-cols-3 gap-2 w-5/6 lg:h-5/6">
            <Letter letter='Q' power={power} soundURL={mode=="Heater kit"?"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <Letter letter='W'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"}/>
            <Letter letter='E'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"}/>
            <Letter letter='A'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"}/>
            <Letter letter='S'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3                                                                            "}/>
            <Letter letter='D'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}/>
            <Letter letter='Z'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"}/>
            <Letter letter='X'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}/>
            <Letter letter='C'power={power} soundURL={mode=="Heater kit"? "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3":
                                                                          "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}/>
        </div>
        <div className="flex flex-col w-5/6 items-center gap-3 lg:w-1/2 lg:justify-around lg:h-full">
          <div className="flex justify-between w-full lg:justify-around">
            <Switch topic="Power" power={true} setFunction={setPower}/>
            <Switch topic="Mode" power={false} setFunction={setMode}/>
          </div>
            <div>
              <p className="lg:text-2xl">{mode}</p>
            </div>
        </div>
      </section>
      <a href="https://portafolio-personal-lime.vercel.app/" className='text-white text-xs pt-3 md:text-lg'>By: Bruno De Cruz</a>
    </main>   
  )
}

export default Drum