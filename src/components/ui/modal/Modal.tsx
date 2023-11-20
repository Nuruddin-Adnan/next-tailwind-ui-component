export default function Modal({ isOpen, onClose, children }: { isOpen: any, onClose: any, children: React.ReactNode }) {
    const overlayClasses = isOpen ? 'fixed inset-0 bg-black bg-opacity-50 w-screen h-screen overflow-auto' : 'hidden';
    const modalClasses = isOpen ? 'grid place-items-center overflow-auto h-screen p-4' : 'hidden';
    const modalContentClasses = 'bg-white p-4 rounded-md shadow-md relative';

    return (
        <div className={overlayClasses}>
            <div className={modalClasses}>
                <div className={modalContentClasses}>
                    <button className="absolute top-0 right-2 text-gray-600 text-2xl rounde" onClick={onClose}>
                        &times;
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};