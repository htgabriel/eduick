import React from "react";
import styles from "./index.module.css";

function Stars({idx, stars}){
	return(
		<button className={idx < stars ? styles.active : ""}>
			<img src="img/Star.png" alt="Star" />
		</button>
	)
}

function CardLessons({id, imgBackground, qtdStars, qtdLessons, lessonName}){
	return (
		<div className={styles.card}>
			<div>
				<img
					className={styles.thumbnail}
					src={imgBackground}
					alt={"Card Thumbnail"}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.stars}>
					{[...new Array(5)].map((_, index) => <Stars key={index} idx={index} stars={qtdStars} />)}
				</div>
				
				<div className={styles.lessons}>
					<span className={styles.bold}> {`${qtdLessons} LESSONS`}</span>
				</div>
			</div>
			<div className={styles.title}>
				<a
					href={`lessons/${id}`}
					className={styles.bold}
				>
					{lessonName}
				</a>
			</div>
		</div>
	)
}

export default CardLessons