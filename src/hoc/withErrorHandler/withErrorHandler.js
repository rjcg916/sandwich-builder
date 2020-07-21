import React from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (Component, OrdersService) => {
    return class extends React.Component {
        state = {
            error: null
        }

        confirmErrorHandler = () =>
            this.setState({ error: null });

        componentWillMount() {
            this.reqInter = OrdersService.interceptors.request.use((req) => {
                this.setState({ error: null })
                return req
            },
            error => this.setState({error: error}));

            this.resInter = OrdersService.interceptors.response.use(resp => resp, 
                error => this.setState({ error: error }));
        }

        componentWillUnmount() {
            OrdersService.interceptors.request.eject(this.reqInter);
            OrdersService.interceptors.response.eject(this.resInter);            
        }

        render() {
            return (<React.Fragment>
                <Modal closeModalHandler={this.confirmErrorHandler}
                    show={this.state.error} >
                    {this.state.error ? this.state.error.message : null}</Modal>
                <Component {...this.props} />
            </React.Fragment>
            )
        }
    }

}

export default withErrorHandler;