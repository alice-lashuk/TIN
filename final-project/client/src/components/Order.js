function Order(props) {
    return (
        <div>
        <div>
          <p>Id: {props.id}</p>
          <p>Item: {props.item}</p>
          <p>Amount: {props.amount}</p>
          <p>Seller: {props.seller}</p>
          <p>Customer: {props.customer}</p>
        </div>
      </div>
    );
}

function OrderDetails(props) {
    return (
      <div>
      <div>
        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.dateOfBirth}</p>
      </div>
    </div>
  );
}

export {Order, OrderDetails};