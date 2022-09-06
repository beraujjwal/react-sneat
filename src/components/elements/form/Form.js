function Form(props) {

    let { id = null, className = null, action = null, method = null, submit = null } = props;

    return (
        <>
            <form
                id={id}
                className={className}
                action={action}
                method={method}
                onSubmit={submit}
            >
                {props.children}
            </form>
        </>
    );
}
  
export default Form;