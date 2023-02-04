import React from 'react'
import { powerSwitch,bankSwitch,displaySet,volumeSet } from './controlsSlice'
import { useSelector,useDispatch } from 'react-redux'

export const ControlsView = () => {

  const dispatch = useDispatch()
  const power = useSelector(state => state.controls.power)
  const bank = useSelector(state => state.controls.bank)
  const volume = useSelector(state => state.controls.volume)
  const display = useSelector(state => state.controls.display)

  const handleChange = (event) => {
    if (!power) return
    dispatch(volumeSet(event.target.value))
  }
  const handlePowerClick = () => {
    const currentPower = power === true ? false : true
    dispatch(powerSwitch(currentPower))
    if(currentPower) {
      dispatch(displaySet(bank))
      document.getElementById("powerSwitch").classList.add('on')
    } else {
      dispatch(displaySet(''))
      document.getElementById("powerSwitch").classList.remove('on')
    }
  }

  const handleBankClick = () => {
    if (!power) return
    const currentBank = bank === "heater" ? "chord" : "heater"
    dispatch(bankSwitch(currentBank))
    dispatch(displaySet(currentBank))
    if(currentBank === "heater"){
      document.getElementById("bankSwitch").classList.remove('on')
    } else {
      document.getElementById("bankSwitch").classList.add('on')
    }
  }

  return (
    <div className="controls-container">
        <div className="control">
            <p>Power</p>
            <div className="select" onClick={handlePowerClick}>
                <div className="inner" id="powerSwitch"></div>
            </div>
        </div>
        <p id="display">{display}</p>
        <div className="volume-slider">
            <input max="1" min="0" step="0.01" type="range" value={volume} onChange={handleChange}/>
        </div>
        <div className="control">
            <p>Bank</p>
            <div className="select" onClick={handleBankClick}>
              <div className="inner" id="bankSwitch"></div>
            </div>
        </div>
    </div>
  )
}
