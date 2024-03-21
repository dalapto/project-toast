import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
	return (
		<ol className={styles.wrapper}>
			{toasts.map(({ id, variant, content }) => {
				return (
					<li key={id} className={styles.toastWrapper}>
						<Toast id={id} variant={variant}>
							{content}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
