export default function Modal({ isOpen, onClose, children }: { isOpen: any, onClose: any, children: React.ReactNode }) {
    const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center z-50' : 'hidden';
    const overlayClasses = isOpen ? 'fixed inset-0 bg-black opacity-50' : 'hidden';
    const modalContentClasses = 'bg-white p-4 rounded shadow-md relative';

    return (
        <div className={modalClasses}>
            <div className={overlayClasses}></div>
            <div className={modalContentClasses}>
                <button className="absolute top-0 right-2 text-gray-600 text-2xl" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};