import { Button, Form} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
function UpdateSellerForm(props) {
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
          <Form.Label>{t('update_message1.label')}</Form.Label>
          <Form.Control name="Sid" type="text" placeholder="Enter seller id" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>{t('seller_name.label')} </Form.Label>
          <Form.Control name="SName" type="text" placeholder="Enter name" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>{t('seller_surname.label')}</Form.Label>
          <Form.Control name="SSurname" type="text" placeholder="Enter surname" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>{t('seller_date.label')}</Form.Label>
          <Form.Control type="date" name="SDateOfBirth" placeholder="Enter date of birth" onChange={props.change} />
        </Form.Group>
        <Form.Group controlId="formPosition">
          <Form.Label>{t('seller_position.label')}</Form.Label>
          <Form.Control type="text" name="SPosition" placeholder="Enter position" onChange={props.change} />
        </Form.Group>
        <Form.Text>
        {t('update_message2.label')}
        </Form.Text>
        <Form.Group controlId="formNameNew">
          <Form.Label>{t('seller_name.label')}</Form.Label>
          <Form.Control name="newSName" type="text" placeholder="Enter new name" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formSurnameNew">
          <Form.Label>{t('seller_surname.label')}</Form.Label>
          <Form.Control name="newSSurname" type="text" placeholder="Enter new surname" onChange={props.change}/>
        </Form.Group>
        <Form.Group controlId="formDateNew">
          <Form.Label>{t('seller_date.label')}</Form.Label>
          <Form.Control type="date" name="newSDateOfBirth" placeholder="Enter new date of birth" onChange={props.change} />
        </Form.Group>
        <Form.Group controlId="formPositionNew">
          <Form.Label>{t('seller_position.label')}</Form.Label>
          <Form.Control type="text" name="newSPosition" placeholder="Enter new position" onChange={props.change} />
        </Form.Group>&nbsp;
        <Button variant="dark" type="submit">
        {t('go_back.label')}
        </Button>&nbsp;
        <Button variant="dark" href = '/'>
        {t('go_back.label')}
      </Button>
      </Form>
      </div>
    </div>
    </div>
    </div>
    );
}
export default withTranslation()(UpdateSellerForm);