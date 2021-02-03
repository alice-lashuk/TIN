import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function CustomerForm(props) {
  let t = props.t;
  return (
    <div class="container-layout">
    <div className="container">
    <div className="d-flex justify-content-center">
    <div class="form">
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
      </Form.Group>&nbsp;
      <Button variant="dark" type="submit">
      {t('add.label')}
      </Button>&nbsp;
      <Button variant="dark" href = '/'>
      {t('go_back.label')}
      </Button>
    </Form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default withTranslation()(CustomerForm);