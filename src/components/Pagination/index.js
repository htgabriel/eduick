import React from "react";
import styles from "./index.module.css";

function Pagination({onClick, limitPage, total, actualPage}){
	const pages = total/limitPage
	
	console.log(actualPage)
	return (
		<div className={styles.pagination}>
			{[...new Array(pages)].map((_, index) =>
				<span
					className={actualPage === index+1 ? styles.active : ''}
					onClick={() => onClick && onClick(index+1)}
					key={index}
				/>
			)}
		</div>
	)
}

export default Pagination