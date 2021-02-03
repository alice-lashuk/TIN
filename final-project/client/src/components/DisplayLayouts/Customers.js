import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function Customers(props) {
    const t = props.t;
    return (
      <Container>
        <Row className="justify-content-md-center">
            <Col md></Col>
            <Col md></Col>
            <Col md>{t("customer_name.label")}</Col>
            <Col md>{t("customer_surname.label")}</Col>
            <Col md></Col>
            <Col md></Col>
        </Row>
      {props.info.map((customer) => {
          return  (
              <Row className="justify-content-md-center">
                  <Col md></Col>
                <Col md></Col>
                <Col>{customer.CName}</Col>
                <Col>{customer.CSurname}</Col>
                <Col md></Col>
                <Col md></Col>
               </Row>
          )})}
          </Container>
    );
}   


export default withTranslation()(Customers);