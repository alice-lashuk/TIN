import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse:"", reload:"", msg:""};
        this.setMsg = this.setMsg.bind(this);
        this.resetMsg = this.resetMsg.bind(this);

    }
    // callApi() {
    //     fetch("http://localhost:9000")
    //     .then(res => res.text())
    //     .then(res => this.setState({apiResponse:res}));
    // }

    // componentWillMount(){
        // this.callApi();
    // }

    resetMsg() {
        this.props.history.replace('', null);
        this.setState({msg:""});
    }
    
    setMsg() {
        this.setState({msg: "success"});
    }

    render() {
        const { t } = this.props;
        let msg="";
        if(this.props.location.state) {
            this.setMsg();
        }
        console.log(this.state.msg);

        if(this.state.msg === "success") {
            window.location.reload();
            msg = this.state.msg;
            this.resetMsg();
        }

        return (
            <div>
                {msg}
                <h1> {t('menu.label')}</h1>
                <ButtonGroup vertical>
                    <Button href = '/add' variant="dark">
                    {t('add_to_table.label')}
                    </Button>{' '}&nbsp;
                    <Button href = '/update' variant="dark">
                    {t('update_table.label')}
                    </Button>{' '}&nbsp;
                    <Button href = '/display' variant="dark">
                    {t('show_table.label')}
                    </Button>{' '}&nbsp;
                    <Button href = '/delete' variant="dark">
                    {t('delete_table.label')}
                    </Button>{' '}&nbsp;
                </ButtonGroup>
            </div>
        );  
    }
}

export default withTranslation()(MainMenu);