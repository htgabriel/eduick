import React, {useEffect, useState} from "react"
import Loader from 'react-loader-spinner'

import {Pagination, CardLessons} from "../components";
import styles from '../styles/dashboard.module.css'
import api from "../services/api"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const limit_per_page = 6

function Dashboard(){
	const [menuVisible, setMenuVisible] = useState(false)
	const [classes, setClasses] = useState([])
	const [totalClasses, setTotalClasses] = useState(0)
	const [loading, setLoading] = useState(true)
	const [actualPage, setActualPage] = useState(1)
	
	useEffect(() => {
		(async () => {
			setTimeout(async () => {
				await fetchData()
			}, 1000)
		})()
	}, [])
	
	async function fetchData(page=1){
		try{
			setLoading(true)
			setClasses([])
			
			const {data, headers: {"x-total-count": total_count}} = await api.get('/classes', {
				params: {
					_limit: 6,
					_page: page
				}
			})
			
			setClasses(data)
			setTotalClasses(total_count)
			setLoading(false)
			setActualPage(page)
		}catch (e){
			console.log(e)
		}
	}
	
	function toggleMenu(){
		setMenuVisible(!menuVisible)
	}
	
	return (
		<div className={styles.dashboard_container}>
			{loading &&
				<div style={{position: "absolute", backgroundColor: "#00000050", width: "100%", height: "100%", zIndex: 20}}>
					<div style={{position: "absolute", top: "50%", left: "50%"}}>
						<Loader
							type="TailSpin"
							color="#00BFFF"
							height={50}
							width={50}
							timeout={10000} //3 secs
						/>
					</div>
				</div>
			}
			
			<input type="checkbox" id="changeMode" className={styles.d_none} />
			
			<div className={styles.navbar}>
				<div>
					<img
						alt={""}
						src={'img/Shape4.png'}
						className={`${styles.shape4} ${styles["hide-mobile"]}`}
					/>
					
					<div className={styles.logo}>
						<a href={"/"}>
							<img src="img/logo.png" alt={"Logo"}/>
						</a>
						
						<span className={styles["hide-mobile"]}>My Classes</span>
					</div>
					
					<div className={styles.user}>
						<button className={`${styles.bold} ${styles["hide-mobile"]}`}>CHANGE TO TEACHER MODE</button>
						
						<span
							onClick={toggleMenu}
						    className={`${styles["open-changeMode"]} ${menuVisible ? styles.rotateIcon : ""}`}
						>
							<span/>
							<span/>
						</span>
						
						<a href={"/profile"}>
							<img src="img/avatar.png" alt="Avatar" />
						</a>
					</div>
				</div>
				
				<a href="/" className={`${styles["change-mode"]} ${menuVisible ? styles.showChangeMode : ""}`}>
					<span className={styles.bold}>CHANGE TO TEACHER MODE</span>
					
					<div className={styles.arrow}>
						<span/>
						<span/>
						<span/>
					</div>
				</a>
			</div>
			
			<div className={styles.container}>
				<div className={`${styles.backdrop} ${menuVisible ? styles.showBackdrop : ''} `}/>
				
				<div className={styles.dashboard}>
					<div className={styles.header}>
						
						<span className={styles.shape1}></span>
						<span className={styles.shape2}></span>
						
						<div className={styles.hello}>
							<div className={styles.title}>
								<span>Hello</span> <span className={styles.bold}>Student</span>
							</div>
							<div className={styles.text}>
								Whether you are a student trying to find your ideal private language teachers/tutors
								or a teacher trying to find great students for your customised private lessons!
							</div>
						</div>
						<div className={`${styles.img} ${styles["hide-mobile"]}`}>
							<img src="img/shape5.png" alt="Shape 5" />
						</div>
					</div>
					
					<div className={styles.grid}>
						
						{classes.map(({id, lesson, stars, lessons, uri}) => {
							return(
								<CardLessons
									key={id}
									id={id}
									lessonName={lesson}
									qtdLessons={lessons}
									qtdStars={stars}
									imgBackground={uri}
								/>
							)
						})}
					</div>
					
					<Pagination
						onClick={fetchData}
						limitPage={limit_per_page}
						total={totalClasses}
						actualPage={actualPage}
					/>
				</div>
			</div>
			
			<div className={styles.footer}>
				<span>Copyright &copy; 2020</span>
				<span className={styles.bold}>Eduick.</span>
				<span className={styles["hide-mobile"]}>Todos os direitos reservados.</span>
			</div>
		</div>
	)
}

export default Dashboard