function Accordion(props) {
    return (
        <>
            <div class="accordion mt-3" id={props.id}>
                {props.children}
            </div>
        </>
    );
}
  
export default Accordion;