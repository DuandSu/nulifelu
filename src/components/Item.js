
function Item({compName, compWebSite, prodName}) {

  // <tr key={`${compName + prodName}`} className="item">

  return (
    <tr className="item">
      <td>{compName}</td>
      <td>{compWebSite}</td>
      <td>{prodName}</td>
    </tr>
  );
}

export default Item;