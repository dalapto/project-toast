import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
	const [activeVariant, setActiveVariant] = React.useState("notice");
	const [message, setMessage] = React.useState("");
	const [liveToasts, setLiveToasts] = React.useState({});

	function handleDismissToast(id) {
		const updatedToasts = { ...liveToasts };
		delete updatedToasts[id];
		setLiveToasts(updatedToasts);
	}

	function handleCreateToast(variant, content) {
		const updatedToasts = { ...liveToasts };
		const id = Math.random();
		updatedToasts[id] = { variant: variant, content: content };
		setLiveToasts(updatedToasts);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf liveToasts={liveToasts} handleDismiss={handleDismissToast} />

			<form
				onSubmit={(event) => {
					event.preventDefault();
					if (message == "") return;
					handleCreateToast(activeVariant, message);
					setActiveVariant("notice");
					setMessage("");
				}}
			>
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
							<Button>Pop Toast!</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
