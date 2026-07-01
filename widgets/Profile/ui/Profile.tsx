"use client";
import { showToast } from "@/shared/lib/profile/toast";
import { LoadingSkeleton } from "./Skeleton";
import { useStoreHydration } from "@/features/profile/model/useStoreHydration";
import { useProfileStore } from "@/features/profile/model/useProfileStore";
import { useCurrentUser } from "@/shared/hooks/useCurrentUser";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function Profile() {
  const router = useRouter();

  // State hooks — order matters: user and hydration must resolve before rendering the form.
  const { user, isAuth, role, ready } = useCurrentUser();
  const hydrated = useStoreHydration();
  const { profile, setProfile, updateField, deleteProfile, hasData } = useProfileStore();

 
  useEffect(() => {
    if (!ready || !hydrated) return;

    if (user) {
      const saved = localStorage.getItem(`profile_${user.name}`);
      if (saved) {
        setProfile(JSON.parse(saved));
      }
    }
  }, [ready, hydrated, user]);

  useEffect(() => {
    if (ready && !isAuth) {
      router.push("/auth");
    }
  }, [ready, isAuth]);

  if (!hydrated) return <LoadingSkeleton />;

  const handleSave = () => {
    if (profile.email && !/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(profile.email)) {
      showToast("Please enter a valid email address", "info");
      return;
    }

    showToast("✓ Profile saved successfully", "success");
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete all profile data?")) {
      deleteProfile();
      showToast("🗑 All data has been deleted", "info");
    }
  };


    return(

<div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50/30 py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 flex items-center gap-3">
              <i className="fas fa-user-circle text-indigo-500 text-4xl" />
              <span>My Profile</span>
            </h1>
            <p className="text-slate-500 mt-1 text-sm">Manage your personal information</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-slate-600 shadow-sm">
            <i className="fas fa-database text-emerald-500 mr-2" />
            {hasData ? 'Data saved locally' : 'No data yet'}
          </div>
        </div>
        
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          {/* Cover with avatar */}
          <div className="bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-8 md:px-8">
            <div className="flex items-center gap-5 flex-wrap">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 inline-flex">
                <i className="fas fa-user fa-3x text-white" />
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-semibold">
                  {profile.firstName || profile.lastName 
                    ? `${profile.firstName} ${profile.lastName}`.trim() 
                    : user.name ? user.name : 'Guest User'}
                </h2>
                <p className="text-indigo-100 text-sm flex items-center gap-2">
                  <i className="fas fa-envelope" />
                  <span>{profile.email || (user.email ? user.email :  'email not set')}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Form & Preview */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Edit Form */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-slate-800 border-b pb-2 flex items-center gap-2">
                  <i className="fas fa-pen text-indigo-400 text-sm" />
                  Edit Profile
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <div className="relative">
                    <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      placeholder="Enter first name"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition outline-none bg-slate-50/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <div className="relative">
                    <i className="fas fa-user-tag absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      placeholder="Enter last name"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition outline-none bg-slate-50/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="example@mail.com"
                      className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition outline-none bg-slate-50/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                  <div className="relative">
                    <i className="fas fa-map-marker-alt absolute left-3 top-4 text-slate-400 text-sm" />
                    <textarea
                      value={profile.address}
                      onChange={(e) => updateField('address', e.target.value)}
                      rows={2}
                      placeholder="City, street, house, apartment..."
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 transition outline-none bg-slate-50/50 resize-none"
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 pt-3">
                  <button
                    onClick={handleSave}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition shadow-sm flex items-center gap-2"
                  >
                    <i className="fas fa-save" />
                    Save Data
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 px-5 py-2.5 rounded-xl font-medium transition flex items-center gap-2"
                  >
                    <i className="fas fa-trash-alt" />
                    Delete All
                  </button>
                </div>
              </div>
              
              {/* Right Column - Preview Card */}
              <div className="bg-linear-to-br from-slate-50 to-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
                  <i className="fas fa-id-card text-indigo-400" />
                  Current Data
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-2 border-b border-slate-100">
                    <i className="fas fa-user-circle text-indigo-400 w-5 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Full Name</p>
                      <p className="font-medium text-slate-800">
                        {profile.firstName || profile.lastName 
                          ? `${profile.firstName} ${profile.lastName}`.trim() 
                          : '—'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-2 border-b border-slate-100">
                    <i className="fas fa-envelope text-indigo-400 w-5 mt-0.5" />
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
                      <p className="font-medium text-slate-800 break-all">
                        {profile.email || '—'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-home text-indigo-400 w-5 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Address</p>
                      <p className="font-medium text-slate-700 text-sm leading-relaxed">
                        {profile.address || '—'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-3 text-xs text-slate-400 border-t border-dashed border-slate-200 flex items-center justify-between">
                  <span><i className="far fa-clock" /> Auto-saved to localStorage</span>
                  <i className="fas fa-database text-indigo-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hint Footer */}
        <div className="mt-6 text-center text-xs text-slate-400 flex justify-center gap-4 flex-wrap">
          <span><i className="fas fa-check-circle text-emerald-400 mr-1" /> Data persists after page refresh</span>
          <span><i className="fas fa-sync-alt text-slate-400 mr-1" /> Zustand + persist middleware</span>
        </div>
      </div>
    </div>
  );
}