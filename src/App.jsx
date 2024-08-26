import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Public from './Public'
import Private from './Private'

function App() {
    
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/public' element={<Public/>}/>
      <Route path='/private' element={<Private/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
