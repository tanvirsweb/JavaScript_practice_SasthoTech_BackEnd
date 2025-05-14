import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    onClose: ()=>void;
}

const Alert = ( {children, onClose}: Props) => {
    return (                
        <div className="alert alert-primary alert-dismissible fade show" onClick={onClose} role="alert">
            <strong> {children} </strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>    
    )
}

export default Alert