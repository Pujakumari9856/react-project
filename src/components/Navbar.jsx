import './Navbar.css';
import { Component } from 'react';
import { MenuItems } from './MenuItems';
class Navbar extends Component{
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
    render(){
      return (
        <div className="nav-menu">
            <div className="logo">
              <img src="/images/logo.jpg" alt="logo"/>
            </div>
            <div className="nav-items">
            <ul>
              {MenuItems.map((item,index)=>{
                return(
                  <li key={index}>
                <a href='/' className={item.cName}>{item.title}</a><i className={item.icon}></i>
              </li>
                )
              })}
            </ul>
    </div>
            <button>JOIN NOW</button>
        </div>
    );
    }
}
export default Navbar;