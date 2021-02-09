import { useState } from "react"
import './App.css'
import FilesView from "./components/filesview/FilesView"
import Header from './components/header'
import Sidebar from './components/sidebar'
import SideIcons from './components/sideicons'
import GDriveLogo from './media/google-drive_logo.png'
import { auth, provider } from './firebase'

function App() {
  const [user, setUser] = useState()

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  } 

  return (
    <div className="App">
    {
      user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app_main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
          <div className='app_login'>
            <img src={GDriveLogo} alt='Google Drive' />
            <button onClick={handleLogin}>Log in to Google Drive</button>
          </div>
      )
    }
    </div>
  );
}

export default App;
