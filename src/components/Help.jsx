import Planta from "../assets/images/help-planta.png";

export default function Help() {
    return (
        <div className="help">
            <div className="image-plant">
            </div>
            <div className="content-help">
                <h1>
                    <span className="sub-h1">Como conseguir</span>
                    <br />
                    <span className="principal-h1"> minha planta</span>
                </h1>
                <p><div className="ball"></div><span className="text">Escolha sua plantas</span></p>
                <p><div className="ball"></div><span className="text">Faça seu pedido</span></p>
                <p><div className="ball"></div><span className="text">Aguarde na sua casa</span></p>
            </div>
        </div>
    )
}