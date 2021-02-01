import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function Order(props) {
  const t = props.t;
    return (
      <Form onSubmit={props.submit}>
        <Form.Group controlId="formSeller">
          <Form.Label> {t('seller.label')}</Form.Label>
          <Form.Control required name="Seller" type="number" placeholder="Enter seller id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label> {t('customer.label')}</Form.Label>
          <Form.Control required name="Customer" type="number" placeholder="Enter customer id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formItem">
          <Form.Label> {t('item.label')}</Form.Label>
          <Form.Control required type="number" name="Item" placeholder="Enter item id" onChange={props.change} />
        </Form.Group>
        <Form.Group controlId="formAmount">
          <Form.Label> {t('amount.label')}</Form.Label>
          <Form.Control required type="number"  min="1" name="Amount" defaultValue="1" placeholder="Enter amount" onChange={props.change} />
        </Form.Group>
        <Button variant="primary" type="submit">
        {t('add.label')}
        </Button>
        <Button variant="primary" href = '/'>
        {t('go_back.label')}
      </Button>
      </Form>
    );
}


export default withTranslation()(Order);
