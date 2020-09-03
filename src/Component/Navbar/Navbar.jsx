import React from 'react'
import './Navbar.css'
import Icon from './IconTodo.png'


const Navbar = () => {
    return (
      <div>
        <nav className="navMenu">
          <img
            src={Icon}
            width="30"
            height="30"
            className="icon"
            alt=""
            loading="lazy"
          />
          <h3 className="brand">Todo List App</h3>
        </nav>
      </div>
    );
}

export default Navbar