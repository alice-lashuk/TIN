import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

function UpdateOrderForm(props) {
  let t = props.t;
    return (
      <Form onSubmit={props.submit}>
          <Form.Text>
          {t('update_message1.label')}
            </Form.Text>
          <Form.Group controlId="formId">
          <Form.Label>{t('update_message1.label')}</Form.Label>
          <Form.Control name="Oid" type="number" min="1" placeholder="Enter order id" onChange={props.change}/>
        </Form.Group>
          <Form.Group controlId="formSeller">
          <Form.Label>{t('seller.label')}</Form.Label>
          <Form.Control required name="Seller"min="1" type="number" placeholder="Enter seller id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>{t('customer.label')}</Form.Label>
          <Form.Control required name="Customer"min="1" type="number" placeholder="Enter customer id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formItem">
          <Form.Label>{t('item.label')}</Form.Label>
          <Form.Control required type="number"min="1" name="Item" placeholder="Enter item id" onChange={props.change} />
        </Form.Group>
        <Form.Group controlId="formAmount">
          <Form.Label>{t('amount.label')}</Form.Label>
          <Form.Control required type="number"  min="1" name="Amount" placeholder="Enter amount" onChange={props.change} />
        </Form.Group>
        <Form.Text>
        {t('update_message2.label')}
        </Form.Text>
        <Form.Group controlId="formSellerNew">
          <Form.Label>{t('seller.label')}</Form.Label>
          <Form.Control required name="SellerNew" min="1" type="number" placeholder="Enter new seller id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formSurnameNew">
          <Form.Label>{t('customer.label')}</Form.Label>
          <Form.Control required name="CustomerNew" min="1" type="number" placeholder="Enter new customer id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formItemNew">
          <Form.Label>{t('item.label')}</Form.Label>
          <Form.Control required type="number"min="1" name="ItemNew" placeholder="Enter new item id" onChange={props.change} />
        </Form.Group>
        <Form.Group controlId="formAmount">
          <Form.Label>{t('amount.label')}</Form.Label>
          <Form.Control required type="number"  min="1" name="AmountNew"  placeholder="Enter new amount" onChange={props.change} />
        </Form.Group>
        <Button variant="primary" type="submit">
        {t('update_btn.label')}
        </Button>
        <Button variant="primary" href = '/'>
        {t('go_back.label')}
      </Button>
      </Form>
    );
}

export default withTranslation()(UpdateOrderForm);
