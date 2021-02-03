import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function UpdateItemForm(props) {
  let t = props.t;
    return (
    <div class="container-layout">
    <div className="container">
    <div className="d-flex justify-content-center">
    <div class="form">
      <Form onSubmit={props.submit}>
          <Form.Text>
          {t('update_message1.label')}
        </Form.Text>
        <Form.Group controlId="formId">
          <Form.Label>{t('item_id.label')}</Form.Label>
          <Form.Control name="Iid" type="text" placeholder="Enter item id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>{t('item_name.label')}</Form.Label>
          <Form.Control name="IName" type="text" placeholder="Enter name" onChange={props.change}/>
        </Form.Group>
        <Form.Text>
        {t('update_message2.label')}
        </Form.Text>
        <Form.Group controlId="formNameNew">
          <Form.Label>{t('item_name.label')}</Form.Label>
          <Form.Control name="INameNew" type="text" placeholder="Enter new name" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formDescriptionNew">
          <Form.Label>{t('item_description.label')}</Form.Label>
          <Form.Control as="textarea"maxlength="200" rows={3} name="IDescriptionNew"  placeholder="Enter description" onChange={props.change}/>
        </Form.Group>&nbsp;
        <Button variant="dark" type="submit">
        {t('update_btn.label')}
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

export default withTranslation()(UpdateItemForm);