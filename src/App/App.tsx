import './App.css'

import Accordion from 'components/shared/Accodrion/Accordion'
import { data } from '../db/data'

function App() {
  return (
    <div className="App">
      <h1>Accordion task</h1>
      {data ? <Accordion data={data} /> : null}
    </div>
  )
}

export default App
