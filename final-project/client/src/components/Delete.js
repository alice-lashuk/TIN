import React from 'react';
import { Button} from 'react-bootstrap';
import DeleteSellerForm from './Forms/DeleteForms/DeleteSellerForm';
import DeleteCustomerForm from './Forms/DeleteForms/DeleteCustomerForm';
import DeleteOrderForm from './Forms/DeleteForms/DeleteOrderForm';
import DeleteItemForm from './Forms/DeleteForms/DeleteItemForm';
import { withTranslation } from 'react-i18next';

class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse:"",tableName:"", dataToSend:"",
                      Cid: "", Cname:"", Csurname:"", CDateOfBirth:"", 
                      Iid: "", IName:"", 
                      Sid: "", SName:"", SSurname:"", SDateOfBirth:"", SPosition:"",
                      Oid:"", Seller:"", Customer:"", Item:"", Amount:""} 
        this.showCustomerForm = this.showCustomerForm.bind(this);
        this.showForm = this.showForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getBackButton = this.getBackButton.bind(this);
    }
    callApi(data) {
      const request = {
        json: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tableName: this.state.tableName, formData: data})
    };

        fetch("http://localhost:9000/delete", request)
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}));
    }

    showForm(event) {
      this.setState ({tableName: event.target.value});
      this.setState ({apiResponse: ""});
      Object.keys(this.state).forEach(function(key) {
        if(key !== "tableName") {
          console.log(key)
          this.setState({[key]: ""});
        } 
      }, this)
    }

    handleInputChange(event) {
      event.preventDefault();
      this.setState({
              [event.target.name]: event.target.value
      });
      this.setState ({apiResponse: ""});
    }

    submitForm(event) {
      event.preventDefault();
      switch(this.state.tableName) {
        case 'Customer':
            this.sendCutomer();
            break;
        case 'Seller':
            this.sendSeller();
            break;
        case 'Customer_order':
            this.sendOrder();
            break;
        case 'Item':
            this.sendItem();
            break;
        default:
          break;
      }
    }

    sendCutomer() {
      const data = {id: this.state.Cid, name: this.state.Cname, surname: this.state.Csurname, date: this.state.CDateOfBirth};
      this.callApi(data);
    }

    sendOrder() {
      const data = {id: this.state.Oid, customer: this.state.Customer, seller: this.state.Seller, item: this.state.Item, amount: this.state.Amount}
      this.callApi(data);
    }

    sendSeller() {
      const data = {id: this.state.Sid, name: this.state.SName, surname: this.state.SSurname, date: this.state.SDateOfBirth, position: this.state.SPosition}
      this.callApi(data);
    }

    sendItem() {
      const data = {name: this.state.IName, id: this.state.Iid}
      this.callApi(data);
    }

    showCustomerForm() {
      return <DeleteCustomerForm  change = {this.handleInputChange} submit = {this.submitForm} />
    }

    showSellerForm() {
      return <DeleteSellerForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }

    showItemForm() {
      return <DeleteItemForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }
    showOrderForm() {
      return <DeleteOrderForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }
    getBackButton(goBack) {
      return <Button variant="dark" href = '/'>{goBack}</Button>
    }

    render() {
      const { t } = this.props;
      let form = "";
      let response = this.state.apiResponse;
      console.log(response);
      let tName = this.state.tableName;
      let title = "";
      let goBack = "";
      if(tName ==="") {
        goBack = this.getBackButton( t('go_back.label'));
      }
      switch(tName) {
        case 'Customer':
          form = this.showCustomerForm();
          title = this.props.t('delete_msg_customer.label');
          break;
        case 'Seller':
          form = this.showSellerForm();
          title = this.props.t('delete_msg_seller.label');
          break;
        case 'Customer_order':
          form = this.showOrderForm();
          title = this.props.t('delete_msg_order.label');
          break;
        case 'Item':
          form = this.showItemForm();
          title = this.props.t('delete_msg_item.label');
          break;
        default:
          break;
      }
        return (
          <div>
            <header>
            </header>
            <div>{response}</div>
                <select title="Select table" onChange={this.showForm}>
                    <option value="">{t('select_delete.label')}</option>
                    <option value="Customer">{t('customer.label')}</option>
                    <option value ="Customer_order">{t('order.label')}</option>
                    <option value ="Item">{t('item.label')}</option>
                    <option value ="Seller">{t('seller.label')}</option>
                </select>&nbsp;
              <div>{title}</div>
            {form}
            {goBack}
          </div>
        );  
      }
}

export default withTranslation()(Delete);
