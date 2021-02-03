import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function ItemsDetails(props) {
    const t = props.t;
    console.log(props);
    return (
        <div>
            <Container>
        <Row>{t("item.label")}:</Row>
        <Row className="justify-content-md-center">
            <Col md>{t("item_id.label")}</Col>
            <Col md>{t("item_name.label")}</Col>
            <Col md>{t("item_description.label")}</Col>
        </Row>
      {props.info.map((item) => {
          return  (
                <div>
                <Row className="justify-content-md-center">
                    <Col md>{item.id}</Col>
                    <Col md>{item.name}</Col>
                    <Col md>{item.description}</Col>
                </Row>
                <Row>{t("orders.label")}</Row>
                <Row className="justify-content-md-center">
                    <Col md>{t("seller_name.label")}</Col>
                    <Col md>{t("customer_name.label")} </Col>
                    <Col md>{t("amount.label")}</Col>
                </Row>
                {item.orders.map((order) => {
                    return  (
                        <Row className="justify-content-md-center">
                            <Col md>{order.SName}</Col>
                            <Col md>{order.CName}</Col>
                            <Col md>{order.Amount}</Col>
                        </Row>
                )})}
                </div>   
          )})}
    </Container>
    </div>
    );
}

export default withTranslation()(ItemsDetails);