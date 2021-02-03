import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function Sellers(props) {
    const t = props.t;
    return (
      <Container>
        <Row className="justify-content-md-center">
            <Col md></Col>
            <Col md></Col>
            <Col md>{t("seller_name.label")}</Col>
            <Col md>{t("seller_surname.label")}</Col>
            <Col md></Col>
            <Col md></Col>
        </Row>
      {props.info.map((seller) => {
          return  (
              <Row className="justify-content-md-center">
                  <Col md></Col>
                <Col md></Col>
                <Col>{seller.SName}</Col>
                <Col>{seller.SSurname}</Col>
                <Col md></Col>
                <Col md></Col>
               </Row>
          )})}
          </Container>
    );
}   


export default withTranslation()(Sellers);