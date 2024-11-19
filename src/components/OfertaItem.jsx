export default function OfertaItem(props) {
    return (
        <div className="oferta-item">
            <img src={props.img} />
            <h1>{props.name}</h1>
            <p>R$ {props.preco}</p>
            <button>Comprar {'->'}</button>
        </div>
    );
}