function Customer(props) {
    return (
        <div>
        <div>
          <p>{props.name} {props.surname}</p>
        </div>
      </div>
    );
}

function CustomerDetails(props) {
    return (
      <div>
      <div>
      <p>{props.id}  {props.name}  {props.surname} {props.dateOfBirth} : </p>
        {props.orders.map((order) => {
          console.log("Amoutn " + order.Amount);
          return <p>{order.Amount}</p>
        })}
      </div>
    </div>
  );
}

export {Customer, CustomerDetails};