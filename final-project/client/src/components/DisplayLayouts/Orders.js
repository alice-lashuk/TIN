import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function Orders(props) {
    const t = props.t;
    return (
      <Container>
        <Row className="justify-content-md-center">
            <Col md></Col>
            <Col md>{t("item_name.label")}</Col>
            <Col md>{t("customer_name.label")}</Col>
            <Col md>{t("seller_name.label")}</Col>
            <Col md>{t("amount.label")}</Col>
            <Col md></Col>
        </Row>
      {props.info.map((order) => {
          return  (
              <Row className="justify-content-md-center">
                  <Col md></Col>
                <Col md>{order.IName}</Col>
                <Col md>{order.CName}</Col>
                <Col md>{order.SName}</Col>
                <Col md>{order.Amount}</Col>
                <Col md></Col>
               </Row>
          )})}
          </Container>
    );
}   

export default withTranslation()(Orders);