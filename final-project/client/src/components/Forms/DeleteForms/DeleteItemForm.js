import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function DeleteItemForm(props) {
  const t = props.t;
    return (
      <Form onSubmit={props.submit}>
          <Form.Text className="text-muted">
          {t('delete_warning.label')}
        </Form.Text>
        <Form.Group controlId="formId">
          <Form.Label>{t('item_id.label')}</Form.Label>
          <Form.Control name="Iid" type="text" placeholder="Enter item id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>{t('item_name.label')}</Form.Label>
          <Form.Control name="IName" type="text" placeholder="Enter name" onChange={props.change}/>
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

export default withTranslation()(DeleteItemForm);