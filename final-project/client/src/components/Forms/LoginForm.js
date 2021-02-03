import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import "../../App.css";
function LoginForm(props) {
  let t = props.t;
  return (
    <div class="container-layout">
    <div className="container">
    <div className="d-flex justify-content-center">
    <div class="form">
    <Form onSubmit={props.submit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>{t('email.label')}</Form.Label>
          <Form.Control type="email" name="email" onChange={props.change}/>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>{t('password.label')}</Form.Label>
          <Form.Control type="password" name="password" onChange={props.change}/>
        </Form.Group>
        <Button variant="dark" block size="lg" type="submit">
        {t('login.label')}
        </Button>
      </Form>
      </div>
      </div>
      </div>
      </div>
  )
}

export default withTranslation()(LoginForm);