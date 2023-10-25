import Navigation from "./Navigation/Nav.js";
import Products from "./Products/Products.js";
import Recommended from "./Recommended/Recommended.js";
import Sidebar from "./Sidebar/Sidebar.js";
function App() {
  return(
  <div>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
  </div>) ;
}

export default App;
