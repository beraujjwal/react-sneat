function Menu(props) {
    return (
        <li className="menu-item">
            <a href={props.path} className="menu-link">
                { props.icon ? <i className={`menu-icon tf-icons bx  ${props.icon}`}></i> : '' }
            <div data-i18n={props.name}>{props.name}</div>
            </a>
        </li>
    );
}
  
export default Menu;