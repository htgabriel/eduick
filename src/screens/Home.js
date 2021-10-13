import React, {useState} from "react"

import '../styles/home.css'
import {MenuMobile, ModalLogin, Button, Input, InputRadio} from '../components'


function Home(){
	const [modalVisible, setModalVisibility] = useState(false)
	
	function openModal(){
		setModalVisibility(!modalVisible)
	}
	
	function Header(){
		return(
			<div className="header">
				<div>
					<label htmlFor="ckbox-menu-mobile" className="hamburguer"> <span/> <span/> <span/> </label>
					
					<a href={"/"}> <img src={"img/logo.png"} alt={"Logo"} /> </a>
					<a href={"/how-it-works"} className={"hide-mobile"}> How it works </a>
					<a href={"/about-us"} className={"hide-mobile"}> About Us </a>
				</div>
				
				<Button
					type={"button"}
					label={"Get Started"}
					htmlFor={"ckbox-login-modal"}
					className={"btn btn-default bold hide-mobile"}
					onClick={openModal}
				/>
			</div>
		)
	}
	
	function ShapeBackground(){
		return (
			<>
				<img src="img/shape1.png" alt={"shape1"} className="shape1 hide-mobile" />
				<img src="img/shape2.png" alt={"shape2"} className="shape2 hide-mobile" />
				
				<div className="picture">
					<img src="img/image.png" alt={"Student"} className="img" />
					<img src="img/shape1.png" alt={"shape1"} className="shape1" />
					<img src="img/shape2.png" alt={"shape2"} className="shape2" />
					<img src="img/shape3.png" alt={"shape3"}  className="shape3 hide-mobile" />
					
					<span className="shape4 hide-mobile"/>
				</div>
			</>
		)
	}
	
	return (
		<>
			<div className="container">
				<div className="page">
					
					<Header />
					
					<div className="body">
						<ShapeBackground />
								
						<div className="content">
							<div className="title">
								<span>Find your</span>
								<span className="big bold">BEST TEACHER</span>
							</div>
							
							<span className="text hide-mobile">
	                            Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
	                        </span>
							
							<div className="form">
								<Input
									type={"text"}
									placeholder={"Type here what are you looking for"}
								/>
								
								<div className="buttons">
									
									<InputRadio
										label={"I'M A TEACHER"}
										name={"form"}
										id={"teacher"}
									/>
									
									<InputRadio
										label={"I'M A STUDENT"}
										name={"form"}
										id={"student"}
									/>
									
									<Button
										type={"button"}
										label={"Search"}
										className="btn btn-default bold"
									/>
								</div>
							</div>
						</div>
					</div>
					<div/>
				</div>
				
				<div className="footer"/>
			</div>
			
			<ModalLogin
				isVisible={modalVisible}
				toggleVisibility={openModal}
			/>
			
			<MenuMobile />
		</>
	)
}

export default Home