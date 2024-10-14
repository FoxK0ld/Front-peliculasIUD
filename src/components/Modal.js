import React from 'react';

export default function Modal({ isOpen, title, onClose, onSave, children }) {
    return (
        <>
            {isOpen && <div className="modal-backdrop fade show"></div>}
            <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden={!isOpen}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalLabel">{title}</h1>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={onSave}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}