import React from 'react';

interface DeleteConfirmationFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const DeleteConfirmationForm: React.FC<DeleteConfirmationFormProps> = ({ onSubmit, onCancel }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto">
      <h3 className="font-bold text-lg">Delete Employee</h3>

      <div className="label">
        <span className="label-text">Are you sure you want to remove this employee?</span>
      </div>

      <div className="modal-action mt-4 flex justify-end">
        <button type="submit" className="btn btn-sm btn-error mr-2">
          Confirm
        </button>
        <button type="button" onClick={onCancel} className="btn btn-sm">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DeleteConfirmationForm;