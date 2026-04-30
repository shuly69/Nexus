"use client";

import { savePhones } from "@/entities/Phone/mock/SavePhones";
import { useAdminStore } from "@/features/admin/model/adminStore";
import { productsSingle } from "@/shared/config/phone";

export function DeleteConfirmationModal() {
  const { phoneToDelete, setPhoneToDelete, variantToDelete, setVariantToDelete, setShowDeleteConfirm, setSuccessMessage, deletePhone, removeVariant } = useAdminStore();
  console.log(phoneToDelete)
  function handleDeletePhone() {
 if (!phoneToDelete) return;

  deletePhone(phoneToDelete.id);


  
  setShowDeleteConfirm(false);
  setPhoneToDelete(null);

  
  setSuccessMessage("Phone deleted successfully");
}


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              {phoneToDelete ? (
                <>Are you sure you want to delete <strong>{phoneToDelete.model}</strong>? This action cannot be undone.</>
              ) : variantToDelete ? (
                <>Are you sure you want to remove this variant (<strong>{variantToDelete.variant.colors[0].name} - {variantToDelete.variant.capacity}</strong>) from <strong>{variantToDelete.phone.model}</strong>?</>
              ) : null}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  if (phoneToDelete) handleDeletePhone();
                  if (variantToDelete) {
                    removeVariant(variantToDelete.phone, variantToDelete.variant.capacity);
                    setShowDeleteConfirm(false);
                    setVariantToDelete(null);
                  }
                }}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setPhoneToDelete(null);
                  setVariantToDelete(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
    )
}