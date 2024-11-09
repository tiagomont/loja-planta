export default function MenuItem(props) {
    return (
        <li>
            <a href={props.href}>
                {props.text}
            </a>
        </li>
    );
}