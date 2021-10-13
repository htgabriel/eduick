import React, {useState} from "react";
import {IoEyeOutline, IoEyeOffOutline} from 'react-icons/all'
import {useHistory} from 'react-router-dom'

import "./index.module.css";
import {Button, Input} from "../index";

function ModalLogin({toggleVisibility, isVisible}){
	const [passwordIsVisible, setVisibilityPassword] = useState(false)
	const history = useHistory()
	
	function showPassword(){
		setVisibilityPassword(!passwordIsVisible)
	}
	
	return (
		<div>
			<div
				className="login-modal"
				style={{
					opacity: isVisible ? 1 : 0,
					visibility: isVisible ? "visible" : "hidden"
				}}
			>
				
				<div className="content" style={{opacity: isVisible ? 1 : 0}}>
					<div onClick={() => toggleVisibility && toggleVisibility()} className="close">
						<span>x</span>
					</div>
					<div className="title">
						<span>Get Started</span>
						<span className="big bold">JUST LOGIN</span>
					</div>
					
					<div className="form">
						<div>
							<label>Username:</label>
							<Input
								label={"Username:"}
							/>
						</div>
						<div>
							<label>Password:</label>
							<Input
								type={passwordIsVisible ? "text" : "password"}
								label={"Password:"}
								icon={true}
							>
								{passwordIsVisible &&
									<IoEyeOffOutline
										size={20}
										color={"#BBA8F2"}
										onClick={showPassword}
									/>
								}
								
								{!passwordIsVisible &&
									<IoEyeOutline
										size={20}
										color={"#BBA8F2"}
										onClick={showPassword}
									/>
								}
							</Input>
						</div>
						
						<Button
							onClick={() => history.replace('/dashboard')}
							type={"button"}
							className={"btn btn-default bold"}
							label={"Login"}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalLogin