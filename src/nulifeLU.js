import React, {Component} from 'react';
import './nulifeLU.css';
import ItemList from './components/ItemList';
import SearchBox from './components/SearchBox';
import { comprod } from './containers/comprod';

class NulifeLU extends Component {
  constructor() {
    super();
    this.state = {
      comprod: comprod,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    // console.log(`Search Field${this.state.searchfield}`);
  }

  render() {
    
    const filteredComProd = this.state.comprod.filter(comprod => {
      return comprod.prodName.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div id="container">
        <div id="header">
              <h1>NuLife Nutrition YYC</h1>
        </div>
        <div id="content">
              <h1>Canadian License Producers (LPS)</h1>
              <div id="nav">
                  <ul>
                      <a href="https://nulifenutritionyyc.ca/cannabis/">
                          <li className="siteLinks">Back to Home Page</li>
                      </a>
                  </ul>
              </div>
              <br></br>
              <h3>The Look-Up App will look-up cannabis products and where to get them. Start typing in the search box.</h3>
              <br></br>
              <SearchBox searchChange={this.onSearchChange}/>
              <br></br>
              <table>
                  <thead>
                      <tr>
                        <th>Company</th>
                        <th>Web Site</th>
                        <th>Product</th>
                      </tr>
                  </thead>  
                  <ItemList comprod={filteredComProd}/>
              </table>
        </div>
      </div>
    );
  }
}

export default NulifeLU;
