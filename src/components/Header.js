import PropTypes from 'prop-types'
import Button from './Button'

const Header=(props)=> {
    return (
    <header className='header'>
       <h1>{props.title}</h1>
       <Button colour={props.showAdd?'Red':'Green'} text={props.showAdd?'Close':'Add'} onClick={props.onAdd}/>
    </header>
    )
}

Header.defaultProps={
    title:"Task Tracker",
}

Header.propTypes={
    title:PropTypes.string,
}

export default Header;