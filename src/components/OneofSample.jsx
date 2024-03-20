import PropTypes from 'prop-types';

export const OneofSample = (props) => {
  const {color} = props;
  return (
    <>
      <p style={{ backgroundColor:color, padding:"20px", 
      color:"white", textAlign:"center" }}>
       This paragraph is a {color} color
       </p>
    </>
  )
}

OneofSample.propTypes ={
  color: PropTypes.oneOf(["red","blue"]).isRequired,
}

