import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogPage from './components/blogPage';
import Footer from './components/footer';
import Header from './components/header';
import MainPage from './components/mainPage';
import WorkPageDetailed from './components/workPageDetailed';
import WorksPage from './components/worksPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' Component={MainPage}/>
        <Route path='/blogs' Component={BlogPage}/>
        <Route path='/works' Component={WorksPage}/>
        <Route path='/workDetailed' Component={WorkPageDetailed}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;