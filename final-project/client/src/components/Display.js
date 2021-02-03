import React from 'react';
import { Button, Form} from 'react-bootstrap';
import SellerDetails from './DisplayLayouts/SellersDetails';
import Customers from './DisplayLayouts/Customers';
import CustomersDetails from './DisplayLayouts/CustomersDetails';
import Orders from './DisplayLayouts/Orders';
import Items from './DisplayLayouts/Items';
import ItemsDetails from './DisplayLayouts/ItemsDetails'
import Sellers from './DisplayLayouts/Sellers';
import Pagination from './Pagination';
import { withTranslation } from 'react-i18next';


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableName:'', apiResponse: [], details: '', posts: [], currentPage: 1, postsPerPage: 4, postPerPageDetails:1 };
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
        let records = <Customers info={info}/>
        return records;
    }

    showCustomerDetails(info) {
        let records = <CustomersDetails info={info}/>
        return records;
    }

    showItemDetails(info) {
        let records = <ItemsDetails info={info}/>
        return records;
    }

    showNextPage(current, length, perPage) {
        if(current < length/perPage) {
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
        return <Pagination 
            perPage={postsPerPage}
            l = {length}
            current = {currentPage}
            nextPage = {this.showNextPage}
            prevPage = {this.showPrevPage}
            paginate = {this.showPage}
        />
    }

    showSellerDetails(info) {
        return <SellerDetails info={info}/>;
    }

    showSeller(info) {
        return <Sellers info={info}/>
    }

    showItem(info) {
        return <Items info={info}/>
    }

    showOrder(info) {
        return <Orders info={info}/>
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

        const postsPerPage1 = this.state.postPerPageDetails;
        const indexOfLastPost1 = currentPage * postsPerPage1;
        const indexOfFirstPost1 = indexOfLastPost1 - postsPerPage1;
        const currentPosts1 = response.slice(indexOfFirstPost1, indexOfLastPost1);
        if(response.length) {
            if(this.state.tableName === "Customer") {
                if(this.state.details === true) {
                    records = this.showCustomerDetails(currentPosts1);
                    pagination = this.showPagination(postsPerPage1, response.length, currentPage);
                } else {
                    records = this.showCustomer(currentPosts);
                    pagination = this.showPagination(postsPerPage, response.length, currentPage);
                }
            } else if(this.state.tableName === "Seller") {
                if(this.state.details === true) {
                    records = this.showSellerDetails(currentPosts1);
                    pagination = this.showPagination(postsPerPage1, response.length, currentPage);
                } else {
                   records = this.showSeller(currentPosts);
                   pagination = this.showPagination(postsPerPage, response.length, currentPage);
                }
            } else if(this.state.tableName === "Item") {
                if(this.state.details === true) {
                    records = this.showItemDetails(currentPosts1);
                    pagination = this.showPagination(postsPerPage1, response.length, currentPage);
                } else {
                    records = this.showItem(currentPosts);
                    pagination = this.showPagination(postsPerPage, response.length, currentPage);
                }
            } else if (this.state.tableName === "Customer_order") {
                records = this.showOrder(currentPosts);
                pagination = this.showPagination(postsPerPage, response.length, currentPage);
            }
        }    
        
        return (
            <div>
            <Form onSubmit={this.sumbitForm}>
                <select title="Select table" onChange={this.handleChange}>
                    <option value="">{t('please_select_table.label')}</option>
                    <option value="Customer">{t('customer.label')}</option>
                    <option value ="Customer_order">{t('order.label')}</option>
                    <option value ="Item">{t('item.label')}</option>
                    <option value ="Seller">{t('seller.label')}</option>
                </select>
                &nbsp;
                &nbsp;
                <div>
            <Button variant="dark" type="submit">
            {t('show_info.label')}
            </Button>&nbsp;
              <Button variant="dark" onClick={this.alternativeSubmit}>
              {t('show_detailed_info.label')}
            </Button>&nbsp;
            <Button variant="dark" href = '/'>  {t('go_back.label')} </Button>
            </div>
            </Form>
            {records}&nbsp;
            {pagination}
            </div>
        );
    }
}

export default withTranslation()(Display);