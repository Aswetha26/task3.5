
import { useState } from 'react';
import PropTypes from 'prop-types';


const AgeCalculatorForm = ( { calculateAge  }) => {
    const [birthDate, setBirthDate] = useState('');
    console.log(birthDate);

    const handleChangeDate = (e) => {
        setBirthDate(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateAge(birthDate);
    }; 



    return ( 
        <center>
        <form onSubmit={handleSubmit}>
            <table>
            <input className='box' value={birthDate} type='date' onChange={handleChangeDate} />
         <tr><center><button className='button' disabled={!birthDate}  type='submit' >Calculate Age</button></center></tr>
            </table>
        </form></center>
    )

};
 
AgeCalculatorForm.propTypes = {
    calculateAge: PropTypes.func.isRequired,
};
export default AgeCalculatorForm;

