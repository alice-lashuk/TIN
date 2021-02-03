import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function DeleteItemForm(props) {
  const t = props.t;
    return (
      <div class="container-layout">
    <div className="container">
    <div className="d-flex justify-content-center">
    <div class="form">
      <Form onSubmit={props.submit}>
          <Form.Text className="text-muted">
          {t('delete_warning.label')}
        </Form.Text>&nbsp;
        <Form.Group controlId="formId">
          <Form.Label>{t('item_id.label')}</Form.Label>
          <Form.Control name="Iid" type="text" placeholder="Enter item id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>{t('item_name.label')}</Form.Label>
          <Form.Control name="IName" type="text" placeholder="Enter name" onChange={props.change}/>
        </Form.Group>&nbsp;
        <Button variant="dark" type="submit">
        {t('delete_btn.label')}
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

export default withTranslation()(DeleteItemForm);