function Input(props) {

    let { id = null, name = null, placeholder = null, className = null, label = null, onChange = null, autoFocus = false, type = 'text', items = [] } = props;

    return (
        <>
            <div className="mb-3">
                <label htmlFor={id} className="form-label">{label}</label>
                {(() => {
                    switch(type){
                        case 'text':
                            return (
                                <>
                                    <input
                                        type="text"
                                        className={className + (error[name] ? 'is-invalid' : '')}
                                        id={id}
                                        name={name}
                                        placeholder={placeholder}
                                        onChange={onChange}
                                        autoFocus={autoFocus}
                                    />
                                </>
                            )
                        case 'checkbox':
                            return (
                                <>
                                    {                                        
                                        items.map((item, index) => {
                                            return (
                                                <>
                                                    <div className="form-check form-check-inline mt-3">
                                                        <input className="form-check-input" type="checkbox" id={`checkbox-${index}`} value={item.value} />
                                                        <label className="form-check-label" for={`checkbox-${index}`}>{item.name}</label>
                                                    </div>
                                                </>
                                            )
                                        })
                                        
                                    }
                                    
                                </>
                            )
                        case 'select':
                            return (
                                <>
                                    {                                        
                                        items.map((item, index) => {
                                            return (
                                                <>
                                                    <div className="form-check form-check-inline mt-3">
                                                        <input className="form-check-input" type="checkbox" id={`checkbox-${index}`} value={item.value} />
                                                        <label className="form-check-label" for={`checkbox-${index}`}>{item.name}</label>
                                                    </div>
                                                </>
                                            )
                                        })
                                        
                                    }
                                    
                                </>
                            )
                        case 'option':
                            return (
                                <>
                                    {                                        
                                        items.map((item, index) => {
                                            return (
                                                <>
                                                    <div className="form-check form-check-inline mt-3">
                                                        <input className="form-check-input" type="checkbox" id={`checkbox-${index}`} value={item.value} />
                                                        <label className="form-check-label" for={`checkbox-${index}`}>{item.name}</label>
                                                    </div>
                                                </>
                                            )
                                        })
                                        
                                    }
                                    
                                </>
                            )
                    }
                })()}
                
                <div className="invalid-feedback">{error[name]}</div>
            </div>
        </>
    );
}
  
export default Input;