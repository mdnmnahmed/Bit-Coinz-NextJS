import Layout from "./components/Layout"
import Prices from "./components/Prices";

const index = (props) => {
    return (
        <>
            <Layout>
                <p>Check BitCoins Rate ---</p>
                <Prices data={props.data} />
            </Layout>
        </>
    )
}

index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        data: data
    }
}

export default index;