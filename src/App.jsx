import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Sidebar from './components/layout/Sidebar';
import './App.css'
function App(){
  return(
    <>
    <Header/>
    <div className="app-body">
      <Sidebar/>
      <Main/>
    </div>
    </>
  );

}

export default App;