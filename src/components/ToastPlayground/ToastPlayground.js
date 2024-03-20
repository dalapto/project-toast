import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [activeVariant, setActiveVariant] = React.useState("notice");
	const [message, setMessage] = React.useState("");
	const [showToast, setShowToast] = React.useState(false);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{showToast && <Toast variant={activeVariant} content={message} handleDismiss={() => setShowToast(false)} />}

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((name) => {
							const variantName = `variant-${name}`;
							return (
								<label htmlFor={variantName} key={variantName}>
									<input
										id={variantName}
										type="radio"
										name="variant"
										onChange={() => setActiveVariant(name)}
										checked={name == activeVariant}
										value={name}
									/>
									{name}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
