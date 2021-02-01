import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function SellerForm(props) {
    const t = props.t;
    return (
      <Form onSubmit={props.submit}>
        <Form.Group controlId="formName">
          <Form.Label>{t('seller_name.label')}</Form.Label>
          <Form.Control required name="SName" type="text" placeholder="Enter name" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>{t('seller_surname.label')}</Form.Label>
          <Form.Control required name="SSurname" type="text" placeholder="Enter surname" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>{t('seller_date.label')}</Form.Label>
          <Form.Control type="date" name="SDateOfBirth" placeholder="Enter date of birth" onChange={props.change} />
        </Form.Group>
        <Form.Group controlId="formPosition">
          <Form.Label>{t('seller_position.label')}</Form.Label>
          <Form.Control type="text" name="SPosition" placeholder="Enter position" onChange={props.change} />
        </Form.Group>
        <Button variant="primary" type="submit">
        {t('add.label')}
        </Button>
        <Button variant="primary" href = '/'>
        {t('go_back.label')}
      </Button>
      </Form>
    );
}


export default withTranslation()(SellerForm);
