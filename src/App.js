import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import MenuComponent from './components/MenuComponent';
import {DISHES} from './shared/dishes';

function App() {
  return (
    <div>
          <Navbar dark color ="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <MenuComponent dishes={DISHES}/>
    </div>
  );
}

export default App;
