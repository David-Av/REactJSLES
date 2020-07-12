import React from "react";
import logo from "./logo.svg";
import "./App.css"; //css style na petqa import anel stex
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import Header from './Header';
// import Technologies from './Technologies';
// import Footer from './Footer';

//das12----------
const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav state={props.appState.sidebar} />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} /> */}
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />

          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.appState.messagesPage} />}
          />
          <Route
            path="/profile"
            component={() => (
              <Profile mypost={props.appState.profilePage.posts} />
            )}
          />
          {/* <Profile/> */}
          {/* <Dialogs /> */}
          {/* <News/> */}
          {/* <Music/>
    <Settings/> */}
        </div>
      </div>
  );
};
//das12verj
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IT cAMS.COM <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
//das 11ic heto
// const App = () => {
//   return(
//      classi tex@ petqa gres Classname
//      mihat glxavor div petqa lini u sax dra mej
//     chi kara stex mihatel ay senc sranic arandzin lini
//      <div></div>
//      karanq nor komponent stexcen i senc grelov dnenq
//       urish komponenti mej
//     <div>
//       <Header />
//       <Technologies />
//       <Footer/>
//     </div>
//   )
// }
// const App = () => {
//   return(
//     <div className ="app-wrapper">
//       <header className ='header'>
//         <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/42/d5/af/42d5afc2-b3d3-56ad-1650-018544ec1079/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"
//           />
//       </header>
//       <nav className = "nav">
//         <div>
//           <a>Profile</a>
//         </div>
//         <div>
//           <a>Messages</a>
//         </div>
//         <div>
//           <a>News</a>
//         </div>
//         <div>
//           <a>Music</a>
//         </div>
//         <div>
//           <a>Settings</a>
//         </div>
//       </nav>
//       <div className = "content">
//         <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU"/>

//       <div>
//         AVA +DESC
//       </div>
//       <div>
//         MY POSTS
//         <div>
//           NEW POST
//         </div>
//         <div>
//           POST1
//         </div>
//         <div>
//           POST 2
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }
//-------------------------------

// const Header = () =>{
//   return (
//     <div>
//       <a href="#s">Home</a>
//       <a href="#s">News Feed</a>
//       <a href="#s">Messages</a>
//     </div>
//   )
// }
// const Technologies = () =>{
//   return (
//     <div >
//     <ul>
//       <li>css</li>
//       <li>HTML</li>
//       <li>REACT</li>
//       <li>js</li>
//     </ul>
//   </div>
//   )
// }
export default App;
// das 06-07***********************************************
// ka tenc ban vor@ kochvuma JSX
// htmla bayc irakanum
// component@ karch asasc funcia a vor@ return a anum JSX razmetka
// orinak App-n
//componentneric sarqvuma sax app@
// patkeracru amen angam vor menq senc funcia enq grum
// orinak App-n reactum sarqvuma nor teg < App />
// u et teg@ vor dnenq inch vor tex ashxatelu a eji vra
// eji vra vor grum enq < App /> react@ inq@ kanchuma et funcian

//das 13ic sksanq ashxatel gitov
