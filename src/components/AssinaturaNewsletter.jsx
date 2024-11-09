import Form from "./Form";

export default function AssinaturaNewsletter() {
    return (
        <div className="assinatura-newsletter">
            <h1>
                <span className="sub-h1">
                    Sua casa com as 
                </span>
                <br />
                <span className="principal-h1">
                    melhores <br /> plantas
                </span>
            </h1>
            <p>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </p>
            <Form />
        </div>
    )
}
