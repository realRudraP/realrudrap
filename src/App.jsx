import { useState } from 'react';
import Header from './components/sections/Header'
import Main from './components/Main'
import Sidebar from './components/sections/Sidebar';
import './App.css'
function App(){
  const [activeSection, setActiveSection] = useState("home");
  return(
    <>
    <Header/>
    <div className="app-body">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Main setActiveSection={setActiveSection}/>
    </div>
    </>
  );

}

export default App;