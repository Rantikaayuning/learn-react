import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe/index';
import BPCard from './pages/BPCard/index';
import Home from './pages/Home/index';
import Navbar from './components/Navbar/index';
import DetailProfile from './pages/DetailProfile/Profile';
import RJBook from './pages/RJCard/index';
import Contributor from './pages/Contributor';
// import Card3 from './components/Card/card3';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
          <Router>
            <Navbar />
              <Switch>
                <Route path='/' exact>
                  <Home />
                </Route>
                <Router path='/bp-card'>
                  <BPCard />
                </Router>
                <Router path='/about-me'>
                  <AboutMe />
                </Router>
                <Router path='/rj-card'>
                  <RJBook />
                </Router>
                <Route path='/detail-profile/:id'>
                  <DetailProfile />
                </Route>
                <Route path='/contributor'>
                  <Contributor />
                </Route>
              </Switch>
          </Router>
  );
}

export default App;

