import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAddTask, showAddTask}) => {
    const onClick = () =>{
        onAddTask();
    }

  return (
    <header className="header">
        <h1>{title}</h1>        
        <Button 
        text={(showAddTask) ? 'Close': 'Add'}
        color={ (showAddTask) ? 'red': 'green' } 
        onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title : "Task Tracker"
}   

Header.prototype = {
    title: PropTypes.string
}

export default Header