import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            {showAdd ? (<Button color='red' text='Close' onClick={onAdd}/>)
                     : (<Button color='green' text='Add' onClick={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: "Todo List",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
