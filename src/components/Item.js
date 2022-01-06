
function Item({compName, compWebSite, prodName}) {

  // <tr key={`${compName + prodName}`} className="item">

  return (
    <tr className="item">
      <td>{compName}</td>
      <td><span><a href={`${compWebSite}`} target="_blank">{`${compWebSite}`}</a></span></td>
      <td>{prodName}</td>
    </tr>
  );
}

export default Item;