import React from "react";
import styles from "./index.module.css"

function Input({type, placeholder, name, id, children}){
	return (
		<div className={styles.input}>
			<input
				name={name}
				id={id}
				type={type ? type : "text"}
				placeholder={placeholder}
			/>
			
			{children}
		</div>
	)
}

export default Input