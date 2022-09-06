function MenuItem(props) {
    return (
        <>
            { ( props.items?.url || props.items?.submenu ) ?
                <li className={props.items?.open ? `menu-item open` : `menu-item` } key={props.items.key}>
                    <a href={props.items?.url ? `${props.items?.url}` : `#` } className={props.children ? "menu-link menu-toggle" : "menu-link"} >
                        { props.items?.icon ? <i className={`menu-icon tf-icons bx  ${props.items?.icon}`}></i> : '' }
                    <div data-i18n={props.items?.title}>{props.items?.title}</div>
                    </a>
                    {props.children ? <ul className="menu-sub"> {props.children} </ul> : "" }
                </li>
                :
                <li className="menu-header small text-uppercase" key={props.items.key}>
                    <span className="menu-header-text">{props.items.title}</span>
                </li>
            }
        </>
    );
}
  
export default MenuItem;