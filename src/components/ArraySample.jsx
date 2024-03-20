import PropTypes from 'prop-types';

export const ArraySample = (props) => {
    const {items} = props;
  return (
    <>
        <h1>list all id name</h1>
        <ul>
            {items.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </>
  )
}

ArraySample.propTypes ={
    items:PropTypes.arrayOf(
        PropTypes.shape({
          id:PropTypes.number.isRequired,
          name:PropTypes.string.isRequired
        })).isRequired
}