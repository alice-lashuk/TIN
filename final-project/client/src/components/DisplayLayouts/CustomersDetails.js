import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function CustomersDetails(props) {
    const t = props.t;
    console.log(props);
    return (
        <div>
            <Container>
        <Row>{t("customer.label")}</Row>
        <Row className="justify-content-md-center">
            <Col >{t("customer_id.label")}</Col>
            <Col md>{t("customer_name.label")}</Col>
            <Col md>{t("customer_surname.label")}</Col>
            <Col md>{t("date_of_birth.label")} </Col>
        </Row>
      {props.info.map((customer) => {
          return  (
                <div>
                <Row className="justify-content-md-center">
                    <Col md>{customer.id}</Col>
                    <Col md>{customer.name}</Col>
                    <Col md>{customer.surname}</Col>
                    <Col md>{customer.dateOfBirth}</Col>
                </Row>
                <Row>{t("orders.label")}</Row>
                <Row className="justify-content-md-center">
                    <Col md>{t("seller_name.label")}</Col>
                    <Col md>{t("item_name.label")} </Col>
                    <Col md>{t("amount.label")}</Col>
                    <Col md></Col>
                </Row>
                {customer.cOrders.map((order) => {
                    return  (
                        <Row className="justify-content-md-center">
                            <Col md>{order.SName}</Col>
                            <Col md>{order.IName}</Col>
                            <Col md>{order.Amount}</Col>
                            <Col md></Col>
                        </Row>
                )})}
                </div>   
          )})}
    </Container>
    </div>
    );
}

export default withTranslation()(CustomersDetails);