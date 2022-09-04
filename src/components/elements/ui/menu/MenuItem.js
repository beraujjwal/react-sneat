function MenuItem(props) {
    return (
        <>
            { props.path ?
                <li className="menu-item">
                    <a href={props.path == '#' ? `javascript:void(0);` : `${props.path}` } className={props.children ? "menu-link menu-toggle" : "menu-link"} >
                        { props.icon ? <i className={`menu-icon tf-icons bx  ${props.icon}`}></i> : '' }
                    <div data-i18n={props.name}>{props.name}</div>
                    </a>
                    {props.children ? <ul className="menu-sub"> {props.children} </ul> : "" }
                </li>
                :
                <li className="menu-header small text-uppercase">
                    <span className="menu-header-text">{props.name}</span>
                </li>
            }
        </>
    );
}
  
export default MenuItem;