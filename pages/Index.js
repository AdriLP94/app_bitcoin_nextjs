import MasterPage from './MasterPage';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {

    return (
        <MasterPage>
            <div className="row">
                <div className="col-12">
                    <Precio precio={props.precio}/>
                </div>
                <div className="col-md-8">
                    <Noticias noticias={props.noticias}/>
                </div>
                <div className="col-md-4">
                    <Eventos eventos={props.eventos}/>
                </div>
            </div>
        </MasterPage>
    );
};

Index.getInitialProps = async () => {
    const precio = await fetch ('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR');
    const noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&language=es&sortBy=publishedAt&apiKey=${process.env.NEXT_APP_APIKEY_NOTICIAS}`);
    const eventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&sort_by=date&token=${process.env.NEXT_APP_APIKEY_EVENTOS}&locale=es_ES`);
    
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();
    return {
        precio : {
            precioBitcoinActual : resPrecio.RAW.BTC.EUR.PRICE,
            precioBitcoinAlto : resPrecio.RAW.BTC.EUR.HIGHDAY,
            precioBitcoinBajo : resPrecio.RAW.BTC.EUR.LOWDAY,
            cambioBitcoinHora : resPrecio.RAW.BTC.EUR.CHANGEPCTHOUR,
            cambioBitcoinDia : resPrecio.RAW.BTC.EUR.CHANGEPCTDAY,
        }, 
        noticias : resNoticias.articles,
        eventos : resEventos
    };
}

export default Index;