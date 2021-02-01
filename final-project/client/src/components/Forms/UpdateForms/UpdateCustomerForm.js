import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function DeleteCustomerForm(props) {
  let t = props.t;
  return (
    <Form onSubmit={props.submit}>
        <Form.Group controlId="formId">
        <Form.Text>
              {t('update_message1.label')}
        </Form.Text>
        <Form.Label>  {t('customer_id.label')}</Form.Label>
        <Form.Control name="Cid" type="text" placeholder="Enter customer id" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>  {t('customer_name.label')}</Form.Label>
        <Form.Control name="Cname" type="text" placeholder="Enter name" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formSurname">
        <Form.Label>  {t('customer_surname.label')}</Form.Label>
        <Form.Control name="Csurname" type="text" placeholder="Enter surname" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>  {t('date_of_birth.label')}</Form.Label>
        <Form.Control type="date" name="CDateOfBirth" placeholder="Enter date of birth" onChange={props.change}/>
      </Form.Group>   
      <Form.Text>
      {t('update_messgae2')}
      </Form.Text>
      <Form.Group controlId="formNameUpdate">
        <Form.Label>  {t('customer_name.label')}</Form.Label>
        <Form.Control name="CnameUpdate" type="text" placeholder="Enter new name" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formSurnameUpdate">
        <Form.Label>  {t('customer_surname.label')}</Form.Label>
        <Form.Control name="CsurnameUpdate" type="text" placeholder="Enter new surname" onChange={props.change}/>
      </Form.Group>
      <Form.Group controlId="formDateUpdate">
        <Form.Label>  {t('date_of_birth.label')}</Form.Label>
        <Form.Control type="date" name="CDateOfBirthUpdate" placeholder="Enter new date of birth" onChange={props.change}/>
      </Form.Group>
      <Button variant="primary" type="submit">
      {t('update_btn.label')}
      </Button>
      <Button variant="primary" href = '/'>
      {t('go_back.label')}
      </Button>
    </Form>
  )
}

export default withTranslation()(DeleteCustomerForm);