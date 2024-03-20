import PropTypes from 'prop-types';

function ChildComponents(props) {
  return (
    <>
      <h2>Child Components</h2>
      {props.children}
    </>
  )
}
ChildComponents.propTypes = {
  children: PropTypes.array
}

export default ChildComponents