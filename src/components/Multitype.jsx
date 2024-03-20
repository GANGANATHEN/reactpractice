import PropTypes from 'prop-types';

export const Multitype = (props) => {
  return (
    <>
        <h1>Multitype</h1>
        <p>message :{props.value}</p>
    </>
  )
}
Multitype.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]).isRequired,
}

