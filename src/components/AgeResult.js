import PropTypes from 'prop-types';

const AgeResult = ({ age }) => {
    return (
        <center>
     <h1>Your {age.years} years old.</h1>
     </center>
    );
};

AgeResult.propTypes = { 
    age: PropTypes.shape({
        years: PropTypes.number.isRequired
    }),
};


export default AgeResult;