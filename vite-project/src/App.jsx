import { useState } from 'react'
import Card from './Components/Card';
import Form from './Components/Form'
import './App.css'

function App() {
  const [formData, setFormData] = useState([]);

  const add = (data) => {
    setFormData(...data);
  };

  return (
    <>
 <div>

      <Form  onFormSubmit={handleFormSubmit} />
      {formdata && <Card data={formData} />}
    </div>
    </>
  )
}

export default App
