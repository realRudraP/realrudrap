import { useState } from 'react';
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Sidebar from './components/layout/Sidebar';
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
      <Main activeSection={activeSection}/>
    </div>
    </>
  );

}

export default App;