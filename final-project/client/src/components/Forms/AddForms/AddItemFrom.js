import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function ItemForm(props) {
  const t = props.t;
    return (
      <div class="container-layout">
    <div className="container">
    <div className="d-flex justify-content-center">
    <div class="form">
      <Form onSubmit={props.submit}>
        <Form.Group controlId="formName">
          <Form.Label>{t('item_name.label')}</Form.Label>
          <Form.Control required name="IName" type="text" placeholder="Enter name" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>{t('item_description.label')}</Form.Label>
          <Form.Control as="textarea"maxLength="200" rows={3} name="IDescription"  placeholder="Enter description" onChange={props.change}/>
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

export default withTranslation()(ItemForm);