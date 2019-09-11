import React from 'react';
import Item from './Item'
import { withRouter } from 'react-router-dom'

const Menu = ({ history }) => {
  return (
    <>
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>

      <div id="menu">
        <div className="pure-menu">
          <span className="pure-menu-heading">Breaking Bad</span>

          <ul className="pure-menu-list">
            <Item
              label="Personagens"
              onClick={() => history.push('/people')} />
          </ul>
        </div>
      </div>
    </>
  )
}

export default withRouter(Menu)
