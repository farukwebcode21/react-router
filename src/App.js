import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Meals from './components/Meals';
import Products from './components/Products';
import Service from './components/Service';
import SingleMeal from './components/SingleMeal';
import PageNotFound from './PageNotFound';

function App() {

  return (
    <>
      <Router>
        {/* <SingleMeal />
        <Header/> */}
        <Switch>
          <Route path="/home"><Meals /></Route>
          <Route exact path="/"><Meals /></Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
