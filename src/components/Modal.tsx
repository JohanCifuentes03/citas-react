
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-200 p-6 rounded-lg shadow-xl">
        {children}
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;