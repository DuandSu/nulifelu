import React, {Component} from 'react';
import './nulifeLU.css';
import ItemList from './components/ItemList';
import ProdSearchBox from './components/ProdSearchBox';
import { comprod } from './containers/comprod';

class NulifeLU extends Component {
  constructor() {
    super();
    this.state = {
      comprod: comprod,
      searchProd1: '',
      searchProd2: ''
    }
  }

  onProd1SearchChange = (event) => {
    this.setState({searchProd1: event.target.value})
  }

  onProd2SearchChange = (event) => {
    this.setState({searchProd2: event.target.value})
  }

  render() {
    
    const filteredComProd1 = this.state.comprod.filter(comprod => {
      return comprod.prodName.toLowerCase().includes(this.state.searchProd1.toLowerCase());
    })

    let filteredComProdFinal = [...filteredComProd1];

    if (this.state.searchProd2 !== '') {
        const filteredComProd2 = this.state.comprod.filter(comprod => {
          return comprod.prodName.toLowerCase().includes(this.state.searchProd2.toLowerCase());
        })

        // loop over filteredComProd2, add the elements of filteredComProd2 if it doesn't exist in filteredComProd1
        filteredComProdFinal = filteredComProd2.reduce((acc, eachArr2Elem) => {
          if (filteredComProd1.findIndex((eachArr1Elem) => eachArr1Elem.compName === eachArr2Elem.compName && eachArr1Elem.prodName === eachArr2Elem.prodName)  === -1) {
              acc.push(eachArr2Elem)
          }
          return acc
        }, [...filteredComProd1]); // initialize the new Array with the contents of array1
    }
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
              <h3>Type in the Search Products box to look-up cannabis products and who has them.</h3>
              <br></br>
              <ProdSearchBox searchChange={this.onProd1SearchChange}/>
              <ProdSearchBox searchChange={this.onProd2SearchChange}/>
              <br></br>
              <table>
                  <thead>
                      <tr>
                        <th>Company</th>
                        <th>Web Site</th>
                        <th>Product</th>
                      </tr>
                  </thead>  
                  <ItemList comprod={filteredComProdFinal.sort(
                      function(a,b) 
                        {
                          let x = a.compName.concat(a.prodName).toLowerCase();
                          let y = b.compName.concat(b.prodName).toLowerCase();
                          if (x < y) {return -1;}
                          if (x > y) {return 1;}
                          return 0;
                        }
                    )}/>
              </table>
        </div>
      </div>
    );
  }
}

export default NulifeLU;
