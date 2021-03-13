import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages';
import {Switch, Route} from 'react-router-dom'
import About from './Pages/about';
import Menu from './Pages/menu';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
