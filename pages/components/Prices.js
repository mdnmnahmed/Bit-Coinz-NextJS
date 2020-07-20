class prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        let list = '';

        if (this.state.currency === 'USD') {
            list =
                <li className="list-group-item">
                    BitCoin Rate for {this.props.data.bpi.USD.description}
                    : <span className="badge badge-primary">
                        {this.props.data.bpi.USD.code}
                    </span>
                    &nbsp;
                    &nbsp;
                    <strong>
                        {this.props.data.bpi.USD.rate}
                    </strong>
                    <span style={{ float: 'right' }}>
                        <small className="text-muted">Last Updated: {this.props.data.time.updated}</small>
                    </span>
                </li>
        } else if (this.state.currency === 'GBP') {
            list =
                <li className="list-group-item">
                    BitCoin Rate for {this.props.data.bpi.GBP.description}
                    : <span className="badge badge-primary">
                        {this.props.data.bpi.GBP.code}
                    </span>
                    &nbsp;
                    &nbsp;
                    <strong>
                        {this.props.data.bpi.GBP.rate}
                    </strong>
                    <span aria-disabled style={{ float: 'right' }}>
                        <small className="text-muted">Last Updated: {this.props.data.time.updated}</small>
                    </span>
                </li>
        } else if (this.state.currency === 'EUR') {
            list =
                <li className="list-group-item">
                    BitCoin Rate for {this.props.data.bpi.EUR.description}
                    : <span className="badge badge-primary">
                        {this.props.data.bpi.EUR.code}
                    </span>
                    &nbsp;
                    &nbsp;
                    <strong>
                        {this.props.data.bpi.EUR.rate}
                    </strong>
                    <span style={{ float: 'right' }}>
                        <small className="text-muted">Last Updated: {this.props.data.time.updated}</small>
                    </span>
                </li>
        }




        return (
            <div>
                <div align="center">
                    <button className="ml-2 btn btn-info shadow rounded-0"
                        onClick={(e) => this.setState({ currency: 'USD' })}
                    >USD</button>

                    <button className="ml-2 btn btn-warning shadow rounded-0"
                        onClick={(e) => this.setState({ currency: 'GBP' })}
                    >BGP</button>

                    <button className="ml-2 btn btn-danger shadow rounded-0"
                        onClick={(e) => this.setState({ currency: 'EUR' })}
                    >EUR</button>
                </div>
                <br />
                <div align="center">
                    <div className="container col-lg-6 ">
                        <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
                            <option value="USD">Choose Coinz</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                </div>
                <br />
                <br />

                <div className="shadow">
                    <ul className="list-group">
                        {list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default prices;
