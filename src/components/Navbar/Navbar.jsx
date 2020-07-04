import React from 'react';
import s from './Navbar.module.css'
 // css petqa modulenrov grenq vor amen meki hamar orinak item class@ sax texer@ grac lini item bayc tarber linen petqa Navbar.css tex@ grel Navbar.module.css u import anel stex s@ es voncvor taza object sarqem pahuma sax ira mej dursa galis senc
/* 
  let s = {
    "nav":"u stex ira parametrer@",
    "item" : u stex orinak font-color:white
  }
  erb vor grum enq module es mer grac orinak nav class@ darnuma senc
  Navbar_nav__365465465 orinak
  u petqa grenq senc nayi tak@
*/
const Nav =()=>{
    return(
        <nav className = {s.nav}>
        <div className = {s.item}>
          <a href="/profile">Profile</a>
        </div>
        <div className = {s.item}>
          <a href="/dialogs">Messages</a>
        </div>
        <div className = {s.item}> 
          <a href="/news">News</a>
        </div>
        <div className = {s.item}>
          <a href="/music">Music</a>
        </div>
        <div className = {s.item}>
          <a href="/settings">Settings</a>
        </div>
      </nav>
        
        
    )
}
export default Nav;