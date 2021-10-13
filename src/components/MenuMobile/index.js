import React, {useState} from "react";
import "./index.module.css"
import {Button, ModalLogin} from "../index";

function MenuMobile(){
	const [modalVisible, setModalVisibility] = useState(false)
	
	function openModal(){
		console.log('open modal')
		setModalVisibility(!modalVisible)
	}
	
	return (
		<>
			<input type="checkbox" id="ckbox-menu-mobile" />
				
				<div className="menu-mobile">
					<div className="header">
						<a href="/">
							<img src="img/logo.png" alt="" />
						</a>
						<label htmlFor="ckbox-menu-mobile">
							x
						</label>
					</div>
					
					<div className="content">
						<a href="/how-it-works" className="btn btn-mobile bold">How it works</a>
						<a href="/about-us" className="btn btn-mobile bold">About Us</a>
						
						<Button
							type={"button"}
							label={"Get Started"}
							htmlFor={"ckbox-login-modal"}
							className={"btn btn-default bold"}
							onClick={openModal}
						/>
					</div>
					
					<ModalLogin
						isVisible={modalVisible}
						toggleVisibility={openModal}
					/>
				</div>
		</>
	)
}

export default MenuMobile