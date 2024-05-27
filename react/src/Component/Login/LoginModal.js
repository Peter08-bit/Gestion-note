import './Login.css'

export function Modal({ isOpen, onClose, children }) {
    return (
        <>
            {
                isOpen ? (
                    <div className='mod'>
                        <div className='mod_background' onClick={onClose}></div>
                        <div className='mod_container' onClick={onClose}>
                            <div className='mod_control' >
                                <button className='mod_close' type='button' onClick={onClose} />
                            </div>
                            {children}
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}