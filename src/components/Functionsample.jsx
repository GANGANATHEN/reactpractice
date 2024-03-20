import PropTypes from 'prop-types'

export const Functionsample = (props) => {
  const {handleClick} = props;
  return (
    <>
      <h1>Function Sample</h1>
      <button onClick={handleClick}>hlo</button>
      </>
  )
}

Functionsample.propTypes = {
  handleClick: PropTypes.func,
}