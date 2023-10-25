import "./Sidebar.css"
import Category from "./Category/Category.js";
import Price from "./Price/Price.js";
import Colors from "./Colors/Colors.js";

function Sidebar() {
  return (
   <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
    
    <Category/>
    <Price/>
    <Colors/>
    
    </section>
   </>
  )
}
export default Sidebar;