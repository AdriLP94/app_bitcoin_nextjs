import MasterPage from './MasterPage';
import Precio from '../components/Precio';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <MasterPage>
            <div className="row">
                <div className="col-12">
                    <Precio precio={props.precio}/>
                </div>
                <div className="col-md-8">
                    <h2>Noticias</h2>
                </div>
                <div className="col-md-4">
                    <h2>Proximos eventos</h2>
                </div>
            </div>
        </MasterPage>
    );
};

Index.getInitialProps = async () => {
    const precio = await fetch ('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR');
    const resPrecio = await precio.json();
    
    return {
        precio : {
            precioBitcoinActual : resPrecio.RAW.BTC.EUR.PRICE,
            precioBitcoinAlto : resPrecio.RAW.BTC.EUR.HIGHDAY,
            precioBitcoinBajo : resPrecio.RAW.BTC.EUR.LOWDAY,
            cambioBitcoinHora : resPrecio.RAW.BTC.EUR.CHANGEPCTHOUR,
            cambioBitcoinDia : resPrecio.RAW.BTC.EUR.CHANGEPCTDAY
        }
    };
}

export default Index;