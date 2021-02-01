import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function ItemForm(props) {
  const t = props.t;
    return (
      <Form onSubmit={props.submit}>
        <Form.Group controlId="formName">
          <Form.Label>{t('item_name.label')}</Form.Label>
          <Form.Control required name="IName" type="text" placeholder="Enter name" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>{t('item_description.label')}</Form.Label>
          <Form.Control as="textarea"maxlength="200" rows={3} name="IDescription"  placeholder="Enter description" onChange={props.change}/>
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

export default withTranslation()(ItemForm);