import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	function dismissToast(id) {
		const updatedToasts = toasts.filter((toast) => {
			return toast.id !== id;
		});
		setToasts(updatedToasts);
	}

	function createToast(variant, content) {
		const updatedToasts = [...toasts, { id: Math.random(), variant: variant, content: content }];
		setToasts(updatedToasts);
	}

	return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
