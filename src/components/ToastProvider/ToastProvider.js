import React from "react";
import useKeydown from "../../hooks/use-keydown";

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

	function resetToasts() {
		setToasts([]);
	}

	const handleEscape = React.useCallback(() => {
		resetToasts();
	});
	useKeydown("Escape", handleEscape);

	return <ToastContext.Provider value={{ toasts, createToast, dismissToast, resetToasts }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
