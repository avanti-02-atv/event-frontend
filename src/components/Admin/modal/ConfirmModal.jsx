
export default function ConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Tem certeza que deseja excluir?</h2>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-gray-300 rounded-md mr-2" onClick={onClose}>
            Cancelar
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={onConfirm}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
