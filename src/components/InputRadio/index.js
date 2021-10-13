import React from "react";
import styles from "./index.module.css"

function InputRadio({name, id, label}){
	return (
		<>
			<input
				className={styles.radio}
				type="radio"
				id={id}
				name={name}
			/>
			
			<label
				className={`btn ${styles["btn-radio"]} bold`}
				htmlFor={id}
			>
				<span className={styles["icon-radio"]}/>
				{label}
			</label>
		</>
	)
}

export default InputRadio