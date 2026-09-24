import React, { useState } from 'react';
import { authApi } from '../../services/api';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AdminLogin({ onLoginSuccess, onBackToSite }) {
  const DEFAULT_KEY = 'wags2026';
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAutofill = () => {
    setPassword(DEFAULT_KEY);
    setError('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(DEFAULT_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const keyToSubmit = password.trim() || DEFAULT_KEY;
    if (!keyToSubmit) {
      setError('Please enter the attendant access key.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await authApi.login(keyToSubmit);
      if (result.success) {
        onLoginSuccess(result.user);
      } else {
        setError(result.error || 'Invalid credentials.');
      }
    } catch (err) {
      setError(err.data?.error || err.message || 'Login failed. Please check credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0D1914] text-[#242826] dark:text-[#E8F0EA] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-sans">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1E3D2F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Back to Site Button */}
      <div className="w-full max-w-md mb-6 z-10">
        <button
          onClick={onBackToSite}
          type="button"
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#799885] dark:text-[#A7D1BD] hover:text-[#1E3D2F] transition px-3 py-1.5 rounded-full hover:bg-white dark:hover:bg-[#14251E] border border-transparent hover:border-[#E2EAE4] dark:hover:border-[#1E382D] cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span>Back to Wedding Website</span>
        </button>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white dark:bg-[#14251E] border border-[#E2EAE4] dark:border-[#1E382D] rounded-3xl p-8 sm:p-10 shadow-xl relative z-10">
        {/* Brand Header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1E3D2F] text-white mb-4 shadow-md shadow-[#1E3D2F]/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1E3D2F] dark:text-[#E8F0EA]">
            {BUSINESS_INFO.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#799885] dark:text-[#8EAFA0] mt-1.5 font-medium">
            Wedding Bookings & Schedule Management
          </p>
          <div className="inline-flex items-center space-x-1.5 bg-[#E8F0EA] dark:bg-[#1E382D] px-3 py-1 rounded-full mt-3 text-[11px] text-[#1E3D2F] dark:text-[#A7D1BD]">
            <svg className="w-3.5 h-3.5 text-[#1E3D2F] dark:text-[#A7D1BD]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">Protected Attendant Suite</span>
          </div>
        </div>

        {/* PROMINENT CREDENTIAL DISPLAY BANNER (Mandatory Rule) */}
        <div className="mb-6 p-4 rounded-2xl bg-[#F5F7F5] dark:bg-[#0D1914] border border-[#E2EAE4] dark:border-[#1E382D] shadow-inner">
          <div className="flex items-center justify-between text-xs text-[#799885] dark:text-[#8EAFA0] mb-2 font-medium">
            <span className="flex items-center gap-1.5 text-[#1E3D2F] dark:text-[#E8F0EA] font-bold uppercase tracking-wider text-[11px]">
              <svg className="w-3.5 h-3.5 text-[#1E3D2F] dark:text-[#A7D1BD]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              Admin Access Key
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#1E3D2F] bg-[#E8F0EA] dark:bg-[#1E382D] dark:text-[#A7D1BD] px-2 py-0.5 rounded-full font-bold">
              Reviewer Access
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 bg-white dark:bg-[#14251E] px-3.5 py-2.5 rounded-xl border border-[#E2EAE4] dark:border-[#1E382D]">
            <code className="font-mono text-base font-bold text-[#1E3D2F] dark:text-[#E8F0EA] tracking-wider">
              {DEFAULT_KEY}
            </code>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleCopy}
                title="Copy Password"
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-[#E8F0EA] hover:bg-[#D2E2D7] text-[#1E3D2F] transition flex items-center gap-1 cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-emerald-700 text-[11px] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5 text-[#1E3D2F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleAutofill}
                className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#1E3D2F] hover:bg-[#152C22] text-white transition flex items-center gap-1 cursor-pointer shadow-xs"
              >
                <span>Autofill</span>
              </button>
            </div>
          </div>
          <p className="text-[11px] text-[#799885] dark:text-[#8EAFA0] mt-2 leading-relaxed">
            Pre-configured access key for client preview. Click <strong>Autofill</strong> to test the dashboard immediately.
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-sm flex items-start space-x-3">
            <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span className="leading-snug">{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[11px] font-bold text-[#1E3D2F] dark:text-[#E8F0EA] uppercase tracking-wider mb-2">
              Attendant Access Key / Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#799885]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full bg-[#FAF8F5] dark:bg-[#0D1914] border border-[#E2EAE4] dark:border-[#1E382D] focus:border-[#1E3D2F] focus:bg-white dark:focus:bg-[#14251E] rounded-xl pl-11 pr-11 py-3 text-sm text-[#242826] dark:text-[#E8F0EA] placeholder-[#799885] transition outline-none"
                autoFocus
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#799885] hover:text-[#1E3D2F] dark:hover:text-white transition cursor-pointer"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-[#1E3D2F] hover:bg-[#152C22] disabled:opacity-50 text-white font-bold text-sm rounded-full transition shadow-md shadow-[#1E3D2F]/20 flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer"
          >
            {isLoading ? <span>Authenticating...</span> : <span>Unlock Bookings Dashboard</span>}
          </button>
        </form>

        {/* Tip */}
        <div className="mt-8 pt-6 border-t border-[#E2EAE4] dark:border-[#1E382D] text-center">
          <p className="text-xs text-[#799885] dark:text-[#8EAFA0] leading-relaxed">
            Protected area for Lacie Kern and Wags & Whiskers attendants.
            <br />
            Configured with 1-click preview authentication.
          </p>
        </div>
      </div>
    </div>
  );
}