const Precio = ({precio}) => {

    const {precioBitcoinActual, precioBitcoinAlto, precioBitcoinBajo, cambioBitcoinHora, cambioBitcoinDia} = precio;

    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header"><h2>Precio del Bitcoin</h2></div>
            <div className="card-body">
                <h4 className="card-title text-center font-weight-bold">Precio Actual: {precioBitcoinActual}€</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text"><span className="font-weight-bold">Precio más alto hoy: </span>{precioBitcoinAlto}€</p>
                    <p className="card-text"><span className="font-weight-bold">Precio más bajo hoy: </span>{precioBitcoinBajo}€</p>
                    <p className="card-text"><span className="font-weight-bold">Variación hora: </span>{cambioBitcoinHora.toFixed(3)}%</p>
                    <p className="card-text"><span className="font-weight-bold">Variación 24 horas: </span>{cambioBitcoinDia.toFixed(3)}%</p>
                </div>

            </div>
        </div>
    );
};

export default Precio;