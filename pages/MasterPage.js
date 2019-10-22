import Head from 'next/head';
import Navegacion from '../components/Navegacion';

const MasterPage = (props) => {
    return (
        <div>
            <Head>
                <title>TodoBitcoin</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>  
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/yeti/bootstrap.min.css"/>
            </Head>
            
            <Navegacion/>
            <div className="container mt-4">
                {props.children}
            </div>
        </div>
    );
};

export default MasterPage;