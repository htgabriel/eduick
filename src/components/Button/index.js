import React from "react";

function Button({type, label, onClick, ...rest}){
	return (
		<>
			{type === "button" &&
				<button
					{...rest}
					onClick={onClick}
				>
					{label}
				</button>
			}
		</>
	)
}

export default Button