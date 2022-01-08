import React, {Component} from 'react'

class Nav extends Component {

  render() {

    return (
<nav role="navigation" class="nav">
  
  <a class="menu-toggle" href="#head-nav">
    <span aria-hidden="true" class="icon-menu"></span><span class="menu-toggle-text"> menu</span>
  </a>
	
  <ul id="main-menu" class="top-nav menu clearfix">
    <li class="menu-item">
      <a href="http://localhost:3000/">Home</a>
    </li>
    <li class="menu-item">
      <a href="http://localhost:3000/about">About</a>
    </li>

  </ul>
  
</nav>
    )
  }
}


export default Nav;