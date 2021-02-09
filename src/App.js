import { useState } from "react"
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'

function App() {
  const [user, setUser] = useState ({
    displayName: "Denis Listiadi",
    email: "denislistiadi24@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://vignette.wikia.nocookie.net/toonami/images/3/3c/Kenshin_Himura.jpg/revision/latest?cb=20131010154417"
  })
  // authentication

  return (
    <div className="App">
      <Header userPhoto={user.photoURL} />
      <Sidebar />
    </div>
  );
}

export default App;
