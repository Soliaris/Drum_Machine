import './App.css'
import { ControlsView } from './features/controls/ControlsView'
import { PadbankView } from './features/pad-bank/PadbankView'

function App() {

  return (
    <div className='App'>
      <div className="inner-container" id='drum-machine'>
          <PadbankView />
          <ControlsView />
      </div>
    </div>
  )
}

export default App
