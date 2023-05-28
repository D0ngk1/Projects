import './App.css';
import {Route, Routes} from "react-router-dom";
import Form from './forms/myForm';
import SuccessForm from './forms/SuccessForm';

function App() {
  return (
    <div className='container'>
      <Routes>
      <Route path="/" element={<Form />}/>
      <Route path="/success" element={<SuccessForm />}/>
      </Routes>
    </div>
  )
}

export default App;
