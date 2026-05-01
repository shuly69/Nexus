"use client";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { createPhone } from "@/entities/Phone/lib/createPhone";
import { brands } from "@/entities/Phone/lib/getStats";
import { updateColorField,  updateVariantField } from "@/entities/Phone/lib/updateColor";
import { createUpdatedPhone } from "@/entities/Phone/lib/updatePhones";
import { useAdminStore } from "@/features/admin/model/adminStore";
import { usePhoneForm } from "@/features/admin/model/usePhoneForm";
import { storages } from "@/shared/config/capacity";
import { colors } from "@/shared/config/colors";
import UploadImage from "@/shared/ui/UploadButton/ui/UploadButton";
import { UploadButton } from "@uploadthing/react";
import { useEffect, useState } from "react";
import { ZodError } from "zod";

export function AddTabSection() {

    const { formData, setFormData, currentVariant, setCurrentVariant, addVariant, removeVariant, reset } = usePhoneForm();
    const {updatePhone, addPhone, setSuccessMessage, phones, editingPhone, setActiveTab, isLoading, setLoading, activeTab} = useAdminStore();
    
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
const handleEditPhone = () => {
  try {
    setLoading(true);
    if (!editingPhone) return;

    const updatedPhone = createUpdatedPhone(editingPhone, formData); 
    updatePhone(updatedPhone);

    reset();
    setSuccessMessage("Phone updated successfully");
    setActiveTab("products");
  } catch (err) {
    if (err instanceof ZodError) {
      const errors: Record<string, string> = {};

    err.issues.forEach(issue => {
      const key = issue.path.join(".");
      errors[key] = issue.message;
    });
    setFormErrors(errors);
    return; 
    }
  } finally {
    setLoading(false);
  }
};

    const handleAddPhone = async () => {
  try {
    
    const newPhone = await createPhone(formData);
    addPhone(newPhone);
    

    reset();
    setActiveTab("products");
  } catch (err) {
    if (err instanceof ZodError) {
      const errors: Record<string, string> = {};

    err.issues.forEach(issue => {
      const key = issue.path.join(".");
      errors[key] = issue.message;
    });
    setFormErrors(errors);
    return; 
    }
  } finally {
    setLoading(false);
  }

};
    useEffect(() => {
  if (editingPhone) {
    setFormData(editingPhone); // ← вот это заполняет все поля
  }
}, [editingPhone]);

    

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
                {activeTab === 'add' ? 'Add New Phone' : 'Edit Phone'}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Basic Information */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Basic Information</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Model Name *</label>
                        <input
                            type="text"
                            value={formData.model}
                            onChange={(e) => setFormData(prev => ({ ...prev, model: e.target.value }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["model"] ? "border-red-500" : ""}`}
                            placeholder="iPhone 16 Pro Max"
                        />
                        {formErrors["model"] && (
                            <p className="text-red-500 text-sm">{formErrors["model"]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["fullName"] ? "border-red-500" : ""}`}
                            placeholder="iPhone 16 Pro Max"
                        />

                        {formErrors["fullName"] && (
                            <p className="text-red-500 text-sm">{formErrors["fullName"]}</p>
                        )}

                    </div>



                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Brand *</label>
                            <select
                                value={formData.brand}
                                onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                                className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["brand"] ? "border-red-500" : ""}`}
                            >
                                <option value="">Select Brand</option>
                                {brands.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                            {formErrors["brand"] && (
                                <p className="text-red-500 text-sm">{formErrors["brand"]}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price *</label>
                            <input
                                type="text"
                                value={formData.price}
                                onChange={(e) => setFormData((prev: any) => ({ ...prev, price: Number(e.target.value) }))}
                                className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["price"] ? "border-red-500" : ""}`}
                                placeholder="iPhone"
                            />
                            {formErrors["price"] && (
                                <p className="text-red-500 text-sm">{formErrors["price"]}</p>
                            )}
                        </div>
                    </div>



                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <div className="*:text-black"> <UploadImage
                            onUpload={(url) =>
                                setFormData(prev => ({
                                    ...prev,
                                    imageUrl: url,
                                }))
                            }
                            onError={(msg) =>
                                setFormErrors(prev => ({
                                    ...prev,
                                    imageUrl: msg, // ← сохраняем ошибку
                                }))
                            }
                        />
                        <span>Choose Image</span>
                        {formErrors.imageUrl && (
  <p className="text-red-500 text-sm">{formErrors.imageUrl}</p>
)}
                        </div>
                       

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            rows={3}
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 resize-none ${formErrors["description"] ? "border-red-500" : ""}`}
                            placeholder="Product description..."
                        />
                        {formErrors["description"] && (
                            <p className="text-red-500 text-sm">{formErrors["description"]}</p>
                        )}
                    </div>
                </div>

                {/* Specifications and Features */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Specifications</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Display</label>
                        <input
                            type="text"
                            value={formData.specs?.display}
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, specs: { ...prev.specs, display: e.target.value } }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["specs.display"] ? "border-red-500" : ""}`}
                            placeholder="6.9-inch Super Retina XDR"
                        />
                        {formErrors["specs.display"] && (
                            <p className="text-red-500 text-sm">{formErrors["specs.display"]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Chip</label>
                        <input
                            type="text"
                            value={formData.specs?.processor}
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, specs: { ...prev.specs, processor: e.target.value } }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["specs.processor"] ? "border-red-500" : ""}`}
                            placeholder="A18 Pro Bionic"
                        />
                        {formErrors["specs.processor"] && (
                            <p className="text-red-500 text-sm">{formErrors["specs.processor"]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Camera</label>
                        <input
                            type="text"
                            value={formData.specs?.camera}
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, specs: { ...prev.specs, camera: e.target.value } }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["specs.camera"] ? "border-red-500" : ""}`}
                            placeholder="48MP Main + 12MP Ultra Wide + 12MP Telephoto"
                        />
                        {formErrors["specs.camera"] && (
                            <p className="text-red-500 text-sm">{formErrors["specs.camera"]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Battery</label>
                        <input
                            type="text"
                            value={formData.specs?.battery}
                            onChange={(e) => setFormData((prev: any) => ({ ...prev, specs: { ...prev.specs, battery: e.target.value } }))}
                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 ${formErrors["specs.battery"] ? "border-red-500" : ""}`}
                            placeholder="Up to 33 hours video playback"
                        />
                        {formErrors["specs.battery"] && (
                            <p className="text-red-500 text-sm">{formErrors["specs.battery"]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Features (one per line)</label>
                        <textarea
                            rows={4}
                            value={formData.features?.join('\n')}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                features: e.target.value.split('\n').filter(f => f.trim())
                            }))}

                            className={`w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 resize-none ${formErrors["features"] ? "border-red-500" : ""}`}
                            placeholder="A18 Pro Bionic Chip&#10;48MP Triple Camera System&#10;6.9&quot; Super Retina XDR Display"
                        />
                        {formErrors["features"] && (
                            <p className="text-red-500 text-sm">{formErrors["features"]}</p>
                        )}
                    </div>


                </div>
            </div>

            {/* Variants Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Product Variants</h3>
                <p className="text-sm text-gray-500 mb-4">Add different color and storage combinations</p>

                {/* Existing Variants List */}
                {formData.variants && formData.variants.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Current Variants</h4>
                        <div className="space-y-2">
                            {formData.variants.map((variant, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                    <div
                                        className="w-6 h-6 rounded-full border border-gray-300"
                                        style={{ backgroundColor: variant.colors[0].name || '#ccc' }}
                                    />
                                    <span className="text-sm font-medium text-gray-700">{variant.colors[0].name}</span>
                                    <span className="text-sm text-gray-500">{variant.capacity}</span>
                                    <span className="text-sm text-gray-500">Qty: {variant.colors[0].stock}</span>
                                    <button
                                        onClick={() => removeVariant(idx)}
                                        className="ml-auto text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Add New Variant Form */}


                <div className={`grid grid-cols-1 md:grid-cols-6 gap-3 items-end ${formErrors["variants"] ? "border-red-500" : ""}`}>
                    {currentVariant.colors.map((color, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 col-span-5 gap-3">
                            <div className="md:col-span-2">
                                <label className="block text-xs text-gray-500 mb-1">Color</label>
                                <select
                                    value={currentVariant.colors[index].name}
                                    onChange={(e) => {
                                        const colorName = e.target.value;
                                        setCurrentVariant(prev => updateColorField(prev, String(color.id), "name", colorName))
                                    }
                                    }

                                    className={`w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm ${formErrors["variants.0.colors.0.name"] ? "border-red-500" : ""}`}
                                >
                                    <option value="">Select Color</option>
                                    {colors.map(color => (
                                        <option key={color.name} value={color.name}>{color.name}</option>
                                    ))}
                                </select>
                                {formErrors["variants.0.colors.0.name"] && (
                                    <p className="text-red-500 text-sm">{formErrors[currentVariant.colors[index].name]}</p>
                                )}
                            </div>

                            <div className="md:col-span-1">
                                <label className="block text-xs text-gray-500 mb-1">Storage</label>
                                <select
                                    value={currentVariant.capacity}
                                    onChange={(e) => setCurrentVariant(prev => updateVariantField(prev, "capacity", e.target.value))}
                                    className={`w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm ${formErrors["variants.0.capacity"] ? "border-red-500" : ""}`}
                                >
                                    <option value="">Select</option>
                                    {storages.map(storage => (
                                        <option key={storage} value={storage}>{storage}</option>
                                    ))}
                                </select>
                                {formErrors["variants.0.capacity"] && (
                                    <p className="text-red-500 text-sm">{formErrors["capacity"]}</p>
                                )}
                            </div>

                            <div >
                                <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                                <input
                                    type="number"
                                    value={currentVariant.colors[index].stock}
                                    onChange={(e) => {
                                        const newStock = Number(e.target.value) || 0;
                                        setCurrentVariant(prev => updateColorField(prev, String(color.id), "stock", newStock));
                                    }
                                    }

                                    className={`w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm ${formErrors[`variants.0.colors.0.stock`] ? "border-red-500" : ""}`}
                                    placeholder="0"
                                />
                                {formErrors[`variants.0.colors.0.stock`] && (
                                    <p className="text-red-500 text-sm">{formErrors[`variants.0.colors.0.stock`]}</p>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="md:col-span-1">
                        <button
                            onClick={addVariant}
                            className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                        >
                            + Add Variant
                        </button>
                    </div>
                </div>
                {formErrors["variants"] && (
                                    <p className="text-red-500 text-sm">{formErrors[`variants`]}</p>
                                )}


                <div className="mt-3">
                    <label className="block text-xs text-gray-500 mb-1">SKU (optional)</label>
                    <input
                        type="text"
                        value={currentVariant.sku}
                        onChange={(e) => setCurrentVariant((prev: any) => ({ ...prev, sku: e.target.value }))}
                        className="w-full md:w-64 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm"
                        placeholder="Auto-generated if empty"
                    />
                </div>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                    onClick={activeTab === 'add' ? handleAddPhone : handleEditPhone}
                    disabled={isLoading}
                    className=" cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {isLoading ? 'Saving...' : (activeTab === 'add' ? 'Add Phone' : 'Save Changes')}
                </button>
                <button
                    onClick={() => {
                        reset();
                        setActiveTab('products');
                    }}
                    className="cursor-pointer px-6 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}