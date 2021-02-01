function Seller(props) {
    return (
        <div>
        <div>
          <p>{props.name}</p>
          <p>{props.surname}</p>
        </div>
      </div>
    );
}

function SellerDetails(props) {
  return (
    <div>
    <div>
    <p>{props.id} : {props.name} : {props.surname} : {props.dateOfBirth} :{props.position} </p>
      {props.orders.map((order) => {
        // console.log("Amoutn " + order.Amount);
        return <p>{order.Amount}</p>
      })}
    </div>
  </div>
);
}

export {Seller, SellerDetails};