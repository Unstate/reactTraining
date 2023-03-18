import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import './styles/app.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { UserContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {

  // debugger

  return (
    <BrowserRouter>
      <div className="appWrapper">
        <HeaderContainer></HeaderContainer>
        <Nav></Nav>
        <div className='appWrapperContent'>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer></ProfileContainer>}></Route> 
            <Route path="/dialogs/*" element={<DialogsContainer></DialogsContainer>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/users" element={<UserContainer></UserContainer>}></Route>
            <Route path="/music" element={<Music/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            {/* <Route path="/users/*" element={<Profile></Profile>}></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
