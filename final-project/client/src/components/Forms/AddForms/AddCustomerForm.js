import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function CustomerForm(props) {
  let t = props.t;
  return (
    <Form onSubmit={props.submit}>
      <Form.Group controlId="formName">
        <Form.Label>{t('customer_name.label')}</Form.Label>
        <Form.Control required name="Cname" type="text" placeholder="Enter name" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label>{t('customer_surname.label')}</Form.Label>
        <Form.Control required name="Csurname" type="text" placeholder="Enter Surname" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>{t('date_of_birth.label')}</Form.Label>
        <Form.Control type="date" name="CDateOfBirth" placeholder="Enter date of birth" onChange={props.change}/>
      </Form.Group>
      <Button variant="primary" type="submit">
      {t('add.label')}
      </Button>
      <Button variant="primary" href = '/'>
      {t('go_back.label')}
      </Button>
    </Form>
  )
}

export default withTranslation()(CustomerForm);