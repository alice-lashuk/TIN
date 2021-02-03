import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function SellerDetails(props) {
    const t = props.t;
    console.log(props);
    return (
        <div>
            <Container>
        <Row>{t("seller.label")}</Row>
        <Row className="justify-content-md-center">
            <Col md>{t("seller_id.label")}</Col>
            <Col md>{t("seller_name.label")}</Col>
            <Col md>{t("seller_surname.label")}</Col>
            <Col md>{t("date_of_birth.label")} </Col>
            <Col md>{t("seller_position.label")} </Col>
        </Row>
      {props.info.map((seller) => {
          return  (
                <div>
                <Row className="justify-content-md-center">
                    <Col md>{seller.id}</Col>
                    <Col md>{seller.name}</Col>
                    <Col md>{seller.surname}</Col>
                    <Col md>{seller.dateOfBirth}</Col>
                    <Col md>{seller.position}</Col>
                </Row>
                <Row>{t("orders.label")}</Row>
                <Row className="justify-content-md-center">
                    <Col md>{t("customer_name.label")}</Col>
                    <Col md>{t("item_name.label")} </Col>
                    <Col md>{t("amount.label")}</Col>
                    <Col md></Col>
                    <Col md></Col>
                </Row>
                {seller.orders.map((order) => {
                    return  (
                        <Row className="justify-content-md-center">
                            <Col md>{order.CName}</Col>
                            <Col md>{order.IName}</Col>
                            <Col md>{order.Amount}</Col>
                            <Col md></Col>
                            <Col md></Col>
                        </Row>
                )})}
                </div>   
          )})}
    </Container>
    </div>
    );
}

export default withTranslation()(SellerDetails);

