import Item from './Item'

function ItemList({comprod}) {

  const itemComponent = comprod.map((prod, i) => {
      return (
          <Item
              key={i} 
              compName={comprod[i].compName} 
              compWebSite={comprod[i].compWebSite}
              prodName={comprod[i].prodName}
          />
      )

  })

  return (
      <tbody>
        {itemComponent}
      </tbody>
  );
}

export default ItemList;