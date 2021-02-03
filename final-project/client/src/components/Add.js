import React from 'react';
import { Button} from 'react-bootstrap';
import SellerForm from './Forms/AddForms/AddSellerForm';
import CustomerForm from './Forms/AddForms/AddCustomerForm';
import ItemForm from './Forms/AddForms/AddItemFrom';
import OrderForm from './Forms/AddForms/AddOrderForm';
import { withTranslation } from 'react-i18next';
// import i18n from 'i18next';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse:"",tableName:"", dataToSend:"",
                      Cname:"", Csurname:"", CDateOfBirth:"", 
                      IName:"", IDescription:"", 
                      SName:"", SSurname:"", SDateOfBirth:"", SPosition:"",
                      Seller:"", Customer:"", Item:"", Amount:""
                    }
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

        fetch("http://localhost:9000/add", request)
        .then(res => res.text())
        .then(res => this.setState({apiResponse:res}));
    }

    // changeLanguage() {
      // i18n.changeLanguage(localStorage.getItem('language'));
      // localStorage.setItem('language', event.target.value);
    // }

    // componentDidMount() {
    //   this.changeLanguage();
    // }


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
          dateCorrect = this.checkDate(this.state.CDateOfBirth);
          console.log(dateCorrect);
          if(dateCorrect) {
            this.sendCutomer();
          } else {
            alert(this.props.t('future_date.label'));
          }
          break;
        case 'Seller':
          dateCorrect = this.checkDate(this.state.SDateOfBirth);
          if(dateCorrect) {
            this.sendSeller();
          } else {
            alert(this.props.t('future_date.label'));
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
      const data = {name: this.state.Cname, surname: this.state.Csurname, date: this.state.CDateOfBirth};
      this.callApi(data);
    }

    sendOrder() {
      const data = {customer: this.state.Customer, seller: this.state.Seller, item: this.state.Item, amount: this.state.Amount}
      this.callApi(data);
    }

    sendSeller() {
      const data = {name: this.state.SName, surname: this.state.SSurname, date: this.state.SDateOfBirth, position: this.state.SPosition}
      this.callApi(data);
    }

    sendItem() {
      const data = {name: this.state.IName, description: this.state.IDescription}
      this.callApi(data);
    }

    showCustomerForm() {
      return <CustomerForm  change = {this.handleInputChange} submit = {this.submitForm} />
    }

    showSellerForm() {
      return <SellerForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }

    showItemForm() {
      return <ItemForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }
    showOrderForm() {
      return <OrderForm change = {this.handleInputChange} submit = {this.submitForm}/>
    }
    getBackButton(goBack) {
      return  <Button variant="dark" href = '/'>{goBack} </Button>
    }

    render() {
      const { t } = this.props;
      let form = "";
      let response = this.state.apiResponse;
      let tName = this.state.tableName;
      let goBack = "";
      if(tName ==="") {
        goBack = this.getBackButton( t('go_back.label'));
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
                    <option value="">{t('please_select_table.label')}</option>
                    <option value="Customer">{t('customer.label')}</option>
                    <option value ="Customer_order">{t('order.label')}</option>
                    <option value ="Item">{t('item.label')}</option>
                    <option value ="Seller">{t('seller.label')}</option>
                </select>&nbsp;
                <div>{response}</div>
            {form}
            {goBack}
          </div>
        );  
      }
}

export default withTranslation()(Add);
