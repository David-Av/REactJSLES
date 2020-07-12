import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
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
const Nav =(props)=>{
let myfrindsState=props.state.myfriends
    .map(elem=><div className={s.Myfriends__d__Wrapper}>
      <div className={s.Myfriendsdimg}>
      <img src={elem.img} alt=""/>
      </div>
      <div className={s.myfriends__Div__Text}>
      {elem.name}
      </div>
      </div>);
    return(
        <nav className = {s.nav}>
        <div className = {s.item}>
          {/* <a href="/profile">Profile</a> */}
          <NavLink to ="/profile" activeClassName = {s.activeLink}>Profile</NavLink>
        </div>
        <div className = {s.item}>
          {/* <a href="/dialogs">Messages</a> */}
          <NavLink to = "/dialogs" activeClassName = {s.activeLink}>Dialogs</NavLink>
        </div>
        <div className = {s.item}> 
          {/* <a href="/news">News</a> */}
          <NavLink to ="/news" activeClassName = {s.activeLink}>News</NavLink>
        </div>
        <div className = {s.item}>
          {/* <a href="/music">Music</a> */}
          <NavLink to ="/music" activeClassName = {s.activeLink}>Music</NavLink>
        </div>
        <div className = {s.item}>
          {/* <a href="/settings">Settings</a> */}
          <NavLink to ="/settings" activeClassName = {s.activeLink}>Setiings</NavLink>
        </div>
        <div className={s.myfriendsDivw}>
          <div className={s.friends_header}>
            My friends
          </div>
          {myfrindsState}
        </div>
      </nav>
        
        
    )
}

export default Nav;
            