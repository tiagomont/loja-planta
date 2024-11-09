import Email from '../assets/images/email.png'

export default function Form() {
    return (
        <form>
            <div>
                <label htmlFor="email">
                    <img style={{width: '20px'}} src={Email} alt="icone email" />
                </label>
                <input type="email" placeholder="Insira seu e-mail"/>
                <button type="submit">Assinar Newsletter</button>
            </div>
        </form>
    );
}