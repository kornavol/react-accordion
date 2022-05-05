import './App.scss'
import Accordion from 'components/shared/Accodrion'

import { data } from 'db/data'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Accordion task</h1>
      {data ? <Accordion data={data} /> : null}
    </div>
  )
}

export default App
