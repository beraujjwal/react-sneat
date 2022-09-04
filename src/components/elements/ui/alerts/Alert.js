function Alert(props) {

    var alertClass = classNames({
        'alert': true,
        'alert-primary': props.class === 'primary',
        'alert-secondary': props.class === 'secondary',
        'alert-success': props.class === 'success',
        'alert-danger': props.class === 'danger',
        'alert-warning': props.class === 'warning',
        'alert-info': props.class === 'info',
        'alert-dark': props.class === 'dark',
        'alert-dismissible': props.close
      });

    return (
        <>
            <div class={alertClass} role="alert">
                {props.children}
                { props.close == true ? 
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    :
                    ""
                }
            </div>
        </>
    );
}
  
export default Alert;