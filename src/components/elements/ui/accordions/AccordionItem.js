function Menu(props) {
    return (
        <>
            <div class={`card accordion-item ${props.active}`}>
                <h2 class="accordion-header" id="headingOne">
                <button
                    type="button"
                    class="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#accordion-${props.key}`}
                    aria-expanded="true"
                    aria-controls={`accordion-${props.key}`}
                >
                    {props.heading}
                </button>
                </h2>

                <div
                id={`accordion-${props.key}`}
                class="accordion-collapse collapse show"
                data-bs-parent={`#accordion-${props.parent-id}`}
                >
                    <div class="accordion-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default Menu;