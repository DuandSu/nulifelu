import './nulifeLU.css';
import ItemList from './components/ItemList';
import SearchBox from './components/SearchBox';
import { comprod } from './containers/comprod';

const state = {
  comprod: comprod,
  searchField: ''
}

function NulifeLU() {
  return (
    <div id="container">
      <div id="header">
            <h1>NuLife Nutrition YYC</h1>
      </div>
      <div id="content">
            <div id="nav">
                <ul>
                    <a href="https://nulifenutritionyyc.ca/">
                        <li className="siteLinks">Home</li>
                    </a>
                </ul>
            </div>
            <br></br>
            <h3>The Look-Up App will look-up cannabis products and where to get them. Start typing in the search box.</h3>
            <br></br>
            <SearchBox/>
            <br></br>
            <table>
                <thead>
                    <tr>
                      <th>Company</th>
                      <th>Web Site</th>
                      <th>Product</th>
                    </tr>
                </thead>  
                <ItemList comprod={comprod}/>
            </table>
      </div>
    </div>
  );
}

export default NulifeLU;
