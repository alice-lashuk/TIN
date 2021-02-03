import { Container, Row, Col} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function Items(props) {
    const t = props.t;
    return (
      <Container>
        <Row className="justify-content-md-center">
            <Col md></Col>
            <Col md></Col>
            <Col md>{t("item_name.label")}</Col>
            <Col md></Col>
            <Col md></Col>
        </Row>
      {props.info.map((item) => {
          return  (
              <Row className="justify-content-md-center">
                <Col md></Col>
                <Col md></Col>
                <Col md>{item.IName}</Col>
                <Col md></Col>
                <Col md></Col>
               </Row>
          )})}
          </Container>
    );
}   

export default withTranslation()(Items);