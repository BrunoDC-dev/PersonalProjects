import { faArrowDown, faArrowUp ,faPause, faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useEffect, useState } from 'react'

const Clock = () => {
const audio = new Audio('/src/assets/ClockSounds/alarm-clock-digital.mp3')
    const [mode , setMode] = useState('Session')
    const [isRunning, setIsRunning] = useState(false)
    const [sessionLength, setSessionLength] = useState(25)
    const [breakLength, setBreakLength] = useState(5)
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60)
    useEffect(() => {
        let interval = 0;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
                if (timeLeft === 0) {
                    //add audio
                    audio.play()
                    setTimeout(() => {
                        audio.pause();
                    }, 3000);
                    if (mode === 'Session') {
                        setMode('Break');
                        setTimeLeft(breakLength * 60);
                    } else {
                        setMode('Session');
                        setTimeLeft(sessionLength * 60);
                    }
                }
            }, 1000);
        } else if (!isRunning && timeLeft !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft, sessionLength, breakLength, mode]);

    const addSession = () => {
        if (sessionLength<100 && !isRunning) {
            setSessionLength(sessionLength+1)
            
            if (mode === 'Session') {
                setTimeLeft((sessionLength+1) * 60);
            }
        }
    }
    const minusSession = () => {
        if (sessionLength>1 && !isRunning) {
            setSessionLength(sessionLength-1)
            if (mode === 'Session') {
                setTimeLeft((sessionLength-1) * 60);
            }
        }
    }
    const addBreak = () => {
        if (breakLength<100 && !isRunning) {
            setBreakLength(breakLength+1)
            if (mode === 'Break') {
                setTimeLeft((breakLength+1) * 60);
            }
        }
    }
    const minusBreak = () => {
        if (breakLength>1 && !isRunning) {
            setBreakLength(breakLength-1)
            if (mode === 'Break') {
                setTimeLeft((breakLength-1) * 60);
            }
        }
    }

    const formatTime = (time:any) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    const reset = () => {
        setTimeLeft(sessionLength * 60);
        setMode('Session');
        setIsRunning(false);
    }
  return (
    <main className="bg-[#C2C2D6] h-screen flex flex-col items-center justify-center  ">
        <section className='w-[300px] flex flex-col items-center justify-center bg-black shadow-xl rounded-xl h-[275px] px-2'>
        <div className='bg-[#AC3939] w-full rounded-t-md py-2'>
            <h1 className='text-white text-2xl font-bold text-center '>25 + 5 Clock</h1>
        </div>
        <div className='flex items-center justify-around text-white gap-2 bg-[#004466] w-full py-3 '>
            <div className='flex flex-col items-center gap-2'>
                <h2 id='break-label' className='text-sm'>Break Length</h2>
                <div className='flex items-center gap-2' >
                    <FontAwesomeIcon  id='break-decrement' icon={faArrowDown} onClick={minusBreak}/>
                    <span className='text-xl' id='break-length'>{breakLength}</span>
                    <FontAwesomeIcon id='break-increment' icon={faArrowUp} onClick={addBreak} />
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 '>
                <h2 className='text-sm' id='session-label'>Session Length</h2>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faArrowDown} id='session-decrement' onClick={minusSession}/>
                    <span  className='text-xl' id='session-length'>{sessionLength}</span>
                    <FontAwesomeIcon icon={faArrowUp} id='session-increment' onClick={addSession} />
                </div>
            </div>
        </div>
        <div className='bg-[#666666] w-full text-center py-2'>
            <h3 className='text-white text-xl font-semibold' id='time-label'>{mode}</h3>
            <span className='text-white text-lg' id='time-left'>{formatTime(timeLeft)}</span>
        </div>
        <div className='bg-[#4D4D4D] w-full flex items-center justify-center gap-5 py-3 rounded-b-md shadow-xl'>
            <div id='start_stop'  onClick={()=>setIsRunning(!isRunning)} >{isRunning? <FontAwesomeIcon   className='text-white text-2xl'  icon={faPause}/>  : <FontAwesomeIcon  icon={faPlay} className='text-white text-2xl' />}
            </div>
            <FontAwesomeIcon onClick={reset} id='reset' className='text-white text-2xl transition-colors ease-in-out delay-100' icon={faStop} style={isRunning? {color:'red'}:{color:'white'}} />
        </div>
        </section>
        <a href="https://portafolio-personal-lime.vercel.app/" className='text-white text-[8px] py-2 text-center lg:hidden'>By: Bruno De Cruz</a>

    </main>
  )
}

export default Clock