import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { displaySet } from "../controls/controlsSlice";


export const PadbankView = () => {

    const dispatch = useDispatch();
    const banktype = useSelector((state) => state.controls.bank)
    const volume = useSelector((state) => state.controls.volume)
    const power = useSelector((state) => state.controls.power)

    useEffect(() => {
        document.addEventListener('keydown', handleKey)
        return () => {
            document.removeEventListener('keydown', handleKey)
          }
    },[power]);

    function playSound(sound, target) {
        dispatch(displaySet(target.id))
        target.classList.add("clicked")
        sound.pause()
            sound.currentTime = 0
            sound.volume = parseFloat(volume)
            sound.play()
            .then(() => {
                setTimeout(function(){
                    target.classList.remove("clicked")
                }, 100);
            })
    }

    const handleClick = (event) => {
        if(power){
            const sound = document.getElementById(event.target.dataset.id)
            playSound(sound,event.target)
        }
    }

    const handleKey = (event) => {
        if(power && document.getElementById(String.fromCharCode(event.keyCode))) {
            const sound = document.getElementById(String.fromCharCode(event.keyCode))
            playSound(sound,document.getElementById(String.fromCharCode(event.keyCode)).parentElement)
        }
    }

    if(banktype === "heater") {
        return (
            <div className='pad-bank'>
                <div className='drum-pad' id="Heater-1" data-id="Q" onClick={handleClick}><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</div>
                <div className='drum-pad' id="Heater-2" data-id="W" onClick={handleClick}><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</div>
                <div className='drum-pad' id="Heater-3" data-id="E" onClick={handleClick}><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</div>
                <div className='drum-pad' id="Heater-4" data-id="A" onClick={handleClick}><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</div>
                <div className='drum-pad' id="Clap" data-id="S" onClick={handleClick}><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</div>
                <div className='drum-pad' id="Open-HH" data-id="D" onClick={handleClick}><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</div>
                <div className='drum-pad' id="Kick-n'-Hat" data-id="Z" onClick={handleClick}><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</div>
                <div className='drum-pad' id="Kick" data-id="X" onClick={handleClick}><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</div>
                <div className='drum-pad' id="Closed-HH" data-id="C" onClick={handleClick}><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</div>
              </div>
        )
    }
    return (
        <div className='pad-bank'>
            <div className='drum-pad' id="Chord-1" data-id="Q" onClick={handleClick}><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"></audio>Q</div>
            <div className='drum-pad' id="Chord-2" data-id="W" onClick={handleClick}><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"></audio>W</div>
            <div className='drum-pad' id="Chord-3" data-id="E" onClick={handleClick}><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>E</div>
            <div className='drum-pad' id="Shaker" data-id="A" onClick={handleClick}><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"></audio>A</div>
            <div className='drum-pad' id="Open-HH" data-id="S" onClick={handleClick}><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>S</div>
            <div className='drum-pad' id="Closed-HH" data-id="D" onClick={handleClick}><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>D</div>
            <div className='drum-pad' id="Punchy-Kick" data-id="Z" onClick={handleClick}><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>Z</div>
            <div className='drum-pad' id="Side-Stick" data-id="X" onClick={handleClick}><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio>X</div>
            <div className='drum-pad' id="Snare" data-id="C" onClick={handleClick}><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio>C</div>
          </div>
    )
}