import VerdeLogo from '../assets/images/VerdeLogo.png'
import MenuItem from './MenuItem'

export default function Menu(props) {
    return (
        <header>
            <img src={VerdeLogo} alt="Logo da Loja"/>
            <nav>
                <ul>
                    <MenuItem text="Como Fazer" href="#" />/
                    <MenuItem text="Ofertas" href="#" />/
                    <MenuItem text="Depoimentos" href="#" />/
                    <MenuItem text="Videos" href="#" />/
                    <MenuItem text="Meu Carrinho" href="#" />
                </ul>
            </nav>
        </header>
    );
}