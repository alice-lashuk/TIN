import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function LoginForm(props) {
  let t = props.t;
  return (
    <Form onSubmit={props.submit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>{t('email.label')}</Form.Label>
          <Form.Control type="email" name="email" onChange={props.change}/>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>{t('password.label')}</Form.Label>
          <Form.Control type="password" name="password" onChange={props.change}/>
        </Form.Group>
        <Button block size="lg" type="submit">
        {t('login.label')}
        </Button>
      </Form>
  )
}

export default withTranslation()(LoginForm);