function Item (props) {
    return (
        <div>
        <div>
          <p>{props.name}</p>
        </div>
      </div>
    );
}

function ItemDetails(props) {
  return (
    <div>
    <div>
    <p>{props.id} : {props.name} : {props.description} </p>
      {props.orders.map((order) => {
        console.log("Amoutn " + order.Amount);
        return <p>{order.Amount}</p>
      })}
    </div>
  </div>
);
}

export {Item, ItemDetails};