import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sender from './components/Sender';
import Receiver from './components/Receiver';


function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/receiver" element={<Receiver />} />
      <Route path="/sender" element={<Sender />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;