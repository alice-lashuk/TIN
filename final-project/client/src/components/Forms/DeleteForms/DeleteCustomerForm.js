import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function DeleteCustomerForm(props) {
  const t = props.t;
  return (
    <Form onSubmit={props.submit}>
         <Form.Text className="text-muted">
             {t('delete_warning.label')}
        </Form.Text>
        <Form.Group controlId="formId">
        <Form.Label>{t('customer_id.label')}</Form.Label>
        <Form.Control name="Cid" type="text" placeholder="Enter customer id" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>{t('customer_name.label')}</Form.Label>
        <Form.Control name="Cname" type="text" placeholder="Enter name" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label>{t('customer_surname.label')}</Form.Label>
        <Form.Control name="Csurname" type="text" placeholder="Enter surname" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>{t('date_of_birth.label')}</Form.Label>
        <Form.Control type="date" name="CDateOfBirth" placeholder="Enter date of birth" onChange={props.change}/>
      </Form.Group>
      <Button variant="primary" type="submit">
      {t('delete_btn.label')}
      </Button>
      <Button variant="primary" href = '/'>
      {t('go_back.label')}
      </Button>
    </Form>
  )
}

export default withTranslation()(DeleteCustomerForm);