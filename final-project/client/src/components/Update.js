import React from 'react';
import { Button} from 'react-bootstrap';
import UpdateSellerForm from './Forms/UpdateForms/UpdateSellerForm';
import UpdateCustomerForm from './Forms/UpdateForms/UpdateCustomerForm';
import UpdateItemForm from './Forms/UpdateForms/UpdateItemFrom';
import UpdateOrderForm from './Forms/UpdateForms/UpdateOrderForm';
import { withTranslation } from 'react-i18next';

class Update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse:"",tableName:"", dataToSend: "",
                      Cname:"", Csurname:"", CDateOfBirth:"", CnameUpdate:"", CsurnameUpdate:"",CDateOfBirthUpdate:"", Cid:"",
                      IName:"", Iid:"", IDescriptionNew:"", INameNew:"",
                      Sid:"", SName:"", SSurname:"", SDateOfBirth:"", SPosition:"", newSName:"", newSSurname:"", newSDateOfBirth:"", newSPosition:"",
                      Oid: "", Seller:"", Customer:"", Item:"", Amount:"", AmountNew:"", ItemNew:"", CustomerNew:"", SellerNew:""} 
        this.showCustomerForm = this.showCustomerForm.bind(this);
        this.showForm = this.showForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkDate = this.checkDate.bind(this);
        this.getBackButton = this.getBackButton.bind(this);

    }
    callApi(data) {
      const request = {
        json: true,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tableName: this.state.tableName, formData: data})
    };

        fetch("http://localhost:9000/update", request)
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}));
    }

    showForm(event) {
      this.setState ({tableName: event.target.value});
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

    checkDate(date) {
      let currentDate = new Date();
      let newDate = new Date(date);
      console.log(newDate.getFullYear());
     if(currentDate < newDate){
      return false;
      } else {
        return true;
      }
    }

    submitForm(event) {
      event.preventDefault();
      let dateCorrect = "";
      switch(this.state.tableName) {
        case 'Customer':
          dateCorrect = this.checkDate(this.state.CDateOfBirthUpdate);
          if(dateCorrect) {
            this.sendCutomer();
          } else {
            alert("Date is in the future! Please enter valid Date ");
          }
          break;
        case 'Seller':
          dateCorrect = this.checkDate(this.state.SDateOfBirth);
          if(dateCorrect) {
            this.sendSeller();
          } else {
            alert("Date is in the future! Please enter valid Date");
          }
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
      const data = {old: {id: this.state.Cid, name: this.state.Cname, surname: this.state.Csurname, date: this.state.CDateOfBirth}, 
                    new: {newName: this.state.CnameUpdate, newSurname: this.state.CsurnameUpdate, newDate: this.state.CDateOfBirthUpdate}};
      this.callApi(data);
    }

    sendOrder() {
      const data = {old: {id: this.state.Oid, customer: this.state.Customer, seller: this.state.Seller, item: this.state.Item, amount: this.state.Amount},
                    new: {newCustomer: this.state.CustomerNew, newSeller: this.state.SellerNew, newItem: this.state.ItemNew, newAmount: this.state.AmountNew}};
      this.callApi(data);
    }

    sendSeller() {
      const data = {old: {id: this.state.Sid, name: this.state.SName, surname: this.state.SSurname, date: this.state.SDateOfBirth, position: this.state.SPosition},
                    new: {newName: this.state.newSName , newSurname: this.state.newSSurname, newDate: this.state.newSDateOfBirth, newPosition: this.state.newSPosition}}
      this.callApi(data);
    }

    sendItem() {
      const data = {old: {name: this.state.IName, id: this.state.Iid},
                    new: {newName: this.state.INameNew, newDiscription: this.state.IDescriptionNew}};
      this.callApi(data);
    }

    showCustomerForm() {
      return <UpdateCustomerForm  change = {this.handleInputChange} submit = {this.submitForm} />
    }

    showSellerForm() {
      return <UpdateSellerForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }

    showItemForm() {
      return <UpdateItemForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }
    showOrderForm() {
      return <UpdateOrderForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }
    getBackButton(goBack) {
      return  <Button variant="primary" href = '/'>{goBack} </Button>
    }

    render() {
      const {t} = this.props;
      let form = "";
      let response = this.state.apiResponse;
      let tName = this.state.tableName;
      let goBack = "";
      if(tName ==="") {
        goBack = this.getBackButton(t('go_back.label'));
      }
      switch(tName) {
        case 'Customer':
          form = this.showCustomerForm();
          break;
        case 'Seller':
          form = this.showSellerForm();
          break;
        case 'Customer_order':
          form = this.showOrderForm();
          break;
        case 'Item':
          form = this.showItemForm();
          break;
        default:
          break;
      }
        return (
          <div>
            <header>
            </header>
                <select title="Select table" onChange={this.showForm}>
                    <option value="">{t('select_update.label')}</option>
                    <option value="Customer">{t('customer.label')}</option>
                    <option value ="Customer_order">{t('order.label')}</option>
                    <option value ="Item">{t('item.label')}</option>
                    <option value ="Seller">{t('seller.label')}</option>
                </select>
            {form}
             {response}
            {goBack}
          </div>
        );  
      }
}

export default withTranslation()(Update);
