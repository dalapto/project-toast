import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ liveToasts, handleDismiss }) {
	return (
		<ol className={styles.wrapper}>
			{Object.entries(liveToasts).map(([id, { variant, content }]) => {
				return (
					<li key={id} className={styles.toastWrapper}>
						<Toast variant={variant} handleDismiss={() => handleDismiss(id)}>
							{content}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
