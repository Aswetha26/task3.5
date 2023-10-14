
import './App.css';
import { useState } from 'react';
import AgeCalculatorForm from './components/AgeCalculatorForm';
import AgeResult from './components/AgeResult';
import { differenceInYears } from 'date-fns'

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj );    
    
    setAge({
      years: ageYears
    });
    

  };
  
  return (
    <div><center>
      <h1>Age Calculator</h1>
      <p><b>Enter your date of birth</b></p></center>
      <AgeCalculatorForm calculateAge={calculateAge} />
      {age && <AgeResult age={age} />}
    </div>
  );
}

export default App;
