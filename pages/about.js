import Layout from "./components/Layout";

export default function about() {
    return (
        <Layout>
            <div>

                <div align="center">
                    <div className="col-lg-6">
                        <div className="jumbotron">
                            <h3>Hey Guys, I'm &nbsp; <a href="https://mdnmnahmed.github.io/portfolio/" target="_BLANK" className="badge badge-dark">&lt;N_Ah /&gt;</a></h3>
                            <br/>
                            <p>
                                This is a simple Project on NextJS <br/> & thanks to Traversy Media for the Video.
                            </p>

                            <br/>
                            <br/>
                            <br/>
                            <small className="text-muted">
                                disclaimer : These data are fetched from the <a href="https://api.coindesk.com/v1/bpi/currentprice.json" target="_blank">CoinDesk API</a>.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
