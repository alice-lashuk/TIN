import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function RegisterForm(props) {
  const t = props.t;
  return (
    <div class="container-layout">
    <div className="container">
    <div className="d-flex justify-content-center">
    <div class="form">
    <Form onSubmit={props.submit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label> {t('name.label')}</Form.Label>
          <Form.Control type="text" name="name" onChange={props.change}/>
        </Form.Group>
        <Form.Group size="lg" controlId="surname">
          <Form.Label> {t('surname.label')}</Form.Label>
          <Form.Control required type="text" name="surname" onChange={props.change}/>
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label> {t('email.label')}</Form.Label>
          <Form.Control required type="email" name="email" onChange={props.change}/>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label> {t('password.label')}</Form.Label>
          <Form.Control required type="password" minLength="8" name="password" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={t('admin.label')} name="isAdmin" onChange={props.changeAdmin}/>
        </Form.Group>
        <Button variant="dark" block size="lg" type="submit">
        {t('register.label')}
        </Button>
      </Form>
      </div>
      </div>
      </div>
      </div>
  )
}

export default withTranslation()(RegisterForm);