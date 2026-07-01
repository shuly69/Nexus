"use client";

import { useEffect, useState } from "react";
import { ZodError } from "zod";
import { brands } from "@/entities/Phone/lib/getStats";
import { updateColorField, updateVariantField } from "@/entities/Phone/lib/updateColor";
import { createUpdatedPhone } from "@/entities/Phone/lib/updatePhones";
import { createPhone } from "@/entities/Phone/lib/createPhone";
import { useAdminStore } from "@/features/admin/model/adminStore";
import { usePhoneForm } from "@/features/admin/model/usePhoneForm";
import { storages } from "@/shared/config/capacity";
import { colors } from "@/shared/config/colors";
import UploadImage from "@/shared/ui/UploadButton/ui/UploadButton";
import type { CardPhone } from "@/entities/Card/type/model";

export function AddTabSection() {
  const {
    formData,
    setFormData,
    currentVariant,
    setCurrentVariant,
    addVariant,
    removeVariant,
    reset,
  } = usePhoneForm();

  const {
    updatePhone,
    addPhone,
    setSuccessMessage,
    editingPhone,
    setActiveTab,
    isLoading,
    setLoading,
    activeTab,
  } = useAdminStore();

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Populate the form when editing an existing phone.
  useEffect(() => {
    if (editingPhone) {
      setFormData(editingPhone);
    }
  }, [editingPhone]);

  /** Collect ZodError issues into a flat key→message map for field-level display. */
  const extractZodErrors = (err: ZodError): Record<string, string> => {
    const errors: Record<string, string> = {};
    for (const issue of err.issues) {
      const key = issue.path.join(".");
      errors[key] = issue.message;
    }
    return errors;
  };

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
        setFormErrors(extractZodErrors(err));
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
        setFormErrors(extractZodErrors(err));
      }
    } finally {
      setLoading(false);
    }
  };

  /** Generic setter for top-level CardPhone fields. */
  const setField = <K extends keyof CardPhone>(key: K, value: CardPhone[K]) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  /** Generic setter for nested `specs` fields. */
  const setSpec = (key: keyof CardPhone["specs"], value: string) =>
    setFormData((prev) => ({
      ...prev,
      specs: { ...prev.specs, [key]: value } as CardPhone["specs"],
    }));

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        {activeTab === "add" ? "Add New Phone" : "Edit Phone"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ── Basic Information ─────────────────────────────────────── */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Basic Information</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model Name *
            </label>
            <input
              type="text"
              value={formData.model}
              onChange={(e) => setField("model", e.target.value)}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 ${
                formErrors["model"] ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="iPhone 16 Pro Max"
            />
            {formErrors["model"] && (
              <p className="text-red-500 text-sm mt-1">{formErrors["model"]}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 ${
                formErrors["fullName"] ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Apple iPhone 16 Pro Max"
            />
            {formErrors["fullName"] && (
              <p className="text-red-500 text-sm mt-1">{formErrors["fullName"]}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand *
              </label>
              <select
                value={formData.brand}
                onChange={(e) => setField("brand", e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 ${
                  formErrors["brand"] ? "border-red-500" : "border-gray-200"
                }`}
              >
                <option value="">Select Brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
              {formErrors["brand"] && (
                <p className="text-red-500 text-sm mt-1">{formErrors["brand"]}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <input
                type="number"
                min={0}
                value={formData.price}
                onChange={(e) => setField("price", Number(e.target.value))}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 ${
                  formErrors["price"] ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="999"
              />
              {formErrors["price"] && (
                <p className="text-red-500 text-sm mt-1">{formErrors["price"]}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <UploadImage
              onUpload={(url) => setField("imageUrl", url)}
              onError={(msg) =>
                setFormErrors((prev) => ({ ...prev, imageUrl: msg }))
              }
            />
            {formErrors.imageUrl && (
              <p className="text-red-500 text-sm mt-1">{formErrors.imageUrl}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setField("description", e.target.value)}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 resize-none ${
                formErrors["description"] ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Product description..."
            />
            {formErrors["description"] && (
              <p className="text-red-500 text-sm mt-1">{formErrors["description"]}</p>
            )}
          </div>
        </div>

        {/* ── Specifications ────────────────────────────────────────── */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Specifications</h3>

          {(
            [
              { key: "display", label: "Display", placeholder: "6.9-inch Super Retina XDR" },
              { key: "processor", label: "Chip", placeholder: "A18 Pro Bionic" },
              { key: "camera", label: "Camera", placeholder: "48MP Main + 12MP Ultra Wide" },
              { key: "battery", label: "Battery", placeholder: "Up to 33 hours video playback" },
            ] as const
          ).map(({ key, label, placeholder }) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type="text"
                value={formData.specs?.[key] ?? ""}
                onChange={(e) => setSpec(key, e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 ${
                  formErrors[`specs.${key}`] ? "border-red-500" : "border-gray-200"
                }`}
                placeholder={placeholder}
              />
              {formErrors[`specs.${key}`] && (
                <p className="text-red-500 text-sm mt-1">{formErrors[`specs.${key}`]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features (one per line)
            </label>
            <textarea
              rows={4}
              value={formData.features?.join("\n")}
              onChange={(e) =>
                setField(
                  "features",
                  e.target.value.split("\n").filter((f) => f.trim())
                )
              }
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-blue-400 resize-none ${
                formErrors["features"] ? "border-red-500" : "border-gray-200"
              }`}
              placeholder={"A18 Pro Bionic Chip\n48MP Triple Camera System"}
            />
            {formErrors["features"] && (
              <p className="text-red-500 text-sm mt-1">{formErrors["features"]}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Product Variants ──────────────────────────────────────── */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-1">Product Variants</h3>
        <p className="text-sm text-gray-500 mb-4">
          Add different color and storage combinations
        </p>

        {/* Existing variants list */}
        {formData.variants && formData.variants.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Current Variants
            </h4>
            <div className="space-y-2">
              {formData.variants.map((variant, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: variant.colors[0]?.name ?? "#ccc" }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {variant.colors[0]?.name}
                  </span>
                  <span className="text-sm text-gray-500">{variant.capacity}</span>
                  <span className="text-sm text-gray-500">
                    Qty: {variant.colors[0]?.stock}
                  </span>
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

        {/* New variant form */}
        <div
          className={`grid grid-cols-1 md:grid-cols-6 gap-3 items-end ${
            formErrors["variants"] ? "border border-red-500 rounded-xl p-3" : ""
          }`}
        >
          {currentVariant.colors.map((colorEntry, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-4 col-span-5 gap-3"
            >
              {/* Color select */}
              <div className="md:col-span-2">
                <label className="block text-xs text-gray-500 mb-1">Color</label>
                <select
                  value={currentVariant.colors[index].name}
                  onChange={(e) =>
                    setCurrentVariant((prev) =>
                      updateColorField(prev, String(colorEntry.id), "name", e.target.value)
                    )
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-sm ${
                    formErrors["variants.0.colors.0.name"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                >
                  <option value="">Select Color</option>
                  {colors.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Storage select */}
              <div className="md:col-span-1">
                <label className="block text-xs text-gray-500 mb-1">Storage</label>
                <select
                  value={currentVariant.capacity}
                  onChange={(e) =>
                    setCurrentVariant((prev) =>
                      updateVariantField(prev, "capacity", e.target.value)
                    )
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-sm ${
                    formErrors["variants.0.capacity"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                >
                  <option value="">Select</option>
                  {storages.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Stock input */}
              <div>
                <label className="block text-xs text-gray-500 mb-1">Quantity</label>
                <input
                  type="number"
                  min={0}
                  value={currentVariant.colors[index].stock}
                  onChange={(e) =>
                    setCurrentVariant((prev) =>
                      updateColorField(
                        prev,
                        String(colorEntry.id),
                        "stock",
                        Number(e.target.value) || 0
                      )
                    )
                  }
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400 text-sm ${
                    formErrors["variants.0.colors.0.stock"]
                      ? "border-red-500"
                      : "border-gray-200"
                  }`}
                  placeholder="0"
                />
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
          <p className="text-red-500 text-sm mt-1">{formErrors["variants"]}</p>
        )}

        {/* Optional SKU field */}
        <div className="mt-3">
          <label className="block text-xs text-gray-500 mb-1">
            SKU (optional)
          </label>
          <input
            type="text"
            value={currentVariant.sku}
            onChange={(e) =>
              setCurrentVariant((prev) => ({ ...prev, sku: e.target.value }))
            }
            className="w-full md:w-64 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-sm"
            placeholder="Auto-generated if empty"
          />
        </div>
      </div>

      {/* ── Actions ───────────────────────────────────────────────── */}
      <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={activeTab === "add" ? handleAddPhone : handleEditPhone}
          disabled={isLoading}
          className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isLoading ? "Saving…" : activeTab === "add" ? "Add Phone" : "Save Changes"}
        </button>
        <button
          onClick={() => {
            reset();
            setActiveTab("products");
          }}
          className="cursor-pointer px-6 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
