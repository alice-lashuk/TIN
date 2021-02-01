import React from 'react';
import { Button, Form} from 'react-bootstrap';
import {Customer, CustomerDetails} from './Customer';
import {Seller, SellerDetails} from './Seller';
import {Item, ItemDetails} from './Item';
import {Order} from './Order';
import Pagination from './Pagination';
import { withTranslation } from 'react-i18next';

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableName:'', apiResponse: [], details: '', posts: [], currentPage: 1, postsPerPage: 2};
        this.sumbitForm = this.sumbitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showCustomer = this.showCustomer.bind(this);
        this.showSeller = this.showSeller.bind(this);
        this.showSeller = this.showSeller.bind(this);
        this.alternativeSubmit = this.alternativeSubmit.bind(this);
        this.showPagination = this.showPagination.bind(this);
        this.showPage = this.showPage.bind(this);
        this.showPrevPage = this.showPrevPage.bind(this);
        this.showNextPage = this.showNextPage.bind(this);
        this.resetPagination = this.resetPagination.bind(this);
    }

    callApi(details) {
        
        const request = {
            json: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tableName: this.state.tableName, details: details })
        };

        fetch("http://localhost:9000/sendTable", request)
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(res => this.setState({apiResponse: res}));
    }

    resetPagination() {
        this.setState({currentPage: 1});
    }

    sumbitForm(event) {
        event.preventDefault();
        this.resetPagination();
        this.setState({details: false});
        this.callApi(false);
        console.log(this.state.apiResponse, this.state.details)
    }

    alternativeSubmit(event) {
        event.preventDefault();
        this.setState ({apiResponse: ""});
        this.resetPagination();
        this.setState({details: true});
        this.callApi(true);
        console.log(this.state.apiResponse, this.state.details) 
    }

    handleChange(event) {
        event.preventDefault();
        this.setState ({tableName: event.target.value});
        this.setState ({apiResponse: ""});
    }

    showCustomer(info) {
        let records = info.map((customer) => (
            <Customer
                name={customer.CName}
                surname={customer.CSurname}
            />
        ));
        return records;
    }

    showCustomerDetails(info) {
        let records = info.map((customer) => (
            <CustomerDetails
                id={customer.id} 
                name={customer.name}
                surname={customer.surname}
                dateOfBirth={customer.dateOfBirth}
                orders = {customer.cOrders}
            />
        ));

        return records;
    }

    showItemDetails(info) {
        let records = info.map((item) => (
            <ItemDetails
                id={item.id}
                name={item.name}
                description={item.description}
                orders={item.orders}
            />
        ));
        return records;
    }

    showNextPage(current, length) {
        if(current < length/2) {
            this.setState({ currentPage: current + 1 });
        }
    }

    showPage(pageNum) {
        this.setState({currentPage: pageNum})
    }
    showPrevPage(current) {
        if(current > 1) {
            this.setState({ currentPage: current - 1 });
        } 
    }

    showPagination(postsPerPage, length, currentPage) {
        let pagination = <Pagination 
            perPage={postsPerPage}
            l = {length}
            current = {currentPage}
            nextPage = {this.showNextPage}
            prevPage = {this.showPrevPage}
            paginate = {this.showPage}
        />
        return pagination;
    }

    showSellerDetails(info) {
        let records = info.map((seller) => (
            <SellerDetails
                id={seller.id}
                name={seller.name}
                surname={seller.surname}
                dateOfBirth={seller.dateOfBirth}
                position={seller.position}
                orders={seller.orders}
            />
        ));
        return records;
    }

    showSeller(info) {
        let records = info.map((seller) => (
            <Seller
                name={seller.SName}
                surname={seller.SSurname}
            />
        ));
        return records;
    }

    showItem(info) {
        let records = info.map((item) => (
            <Item
                name={item.IName}
            />
        ));
        return records;
    }

    showOrder(info) {
        let records = info.map((order) => (
            <Order
                id={order.IdOrder}
                item={order.IName}
                customer={order.CName}
                amount={order.Amount}
                seller={order.SName}
            />
        ));
        return records;
    }

    render() {
        const { t } = this.props;
        let records = '';
        let pagination = "";
        let response = this.state.apiResponse;
        const currentPage = this.state.currentPage;
        const postsPerPage = this.state.postsPerPage;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = response.slice(indexOfFirstPost, indexOfLastPost);
        if(response.length) {
            if(this.state.tableName === "Customer") {
                if(this.state.details === true) {
                    records = this.showCustomerDetails(currentPosts);
                } else {
                    records = this.showCustomer(currentPosts);
                }
            } else if(this.state.tableName === "Seller") {
                if(this.state.details === true) {
                    records = this.showSellerDetails(currentPosts);
                } else {
                   records = this.showSeller(currentPosts);
                }
            } else if(this.state.tableName === "Item") {
                if(this.state.details === true) {
                    records = this.showItemDetails(currentPosts);
                } else {
                    records = this.showItem(currentPosts);
                    
                }
            } else if (this.state.tableName === "Customer_order") {
                records = this.showOrder(currentPosts);
            }
            pagination = this.showPagination(postsPerPage, response.length, currentPage);
        }    
        
        return (
            <div>
            <Form onSubmit={this.sumbitForm}>
                <select title="Select table" class="selectpicker" onChange={this.handleChange}>
                    <option value="">{t('please_select_table.label')}</option>
                    <option value="Customer">{t('customer.label')}</option>
                    <option value ="Customer_order">{t('order.label')}</option>
                    <option value ="Item">{t('item.label')}</option>
                    <option value ="Seller">{t('seller.label')}</option>
                </select>
            <Button variant="primary" type="submit">
            {t('show_info.label')}
            </Button>
              <Button variant="primary" onClick={this.alternativeSubmit}>
              {t('show_detailed_info.label')}
            </Button>
            <Button variant="primary" href = '/'>  {t('go_back.label')} </Button>
            </Form>
            {records}
            {pagination}
            </div>
        );
    }
}

export default withTranslation()(Display);