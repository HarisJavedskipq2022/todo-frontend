import React from "react";

function Button({ children, variant = "default", onClick, ...props }) {
	let className = "p-2 rounded transition duration-150";

	switch (variant) {
		case "primary":
			className += " bg-blue-500 text-white hover:bg-blue-600";
			break;
		case "danger":
			className += " bg-red-500 text-white hover:bg-red-600";
			break;
		case "neutral":
			className += " bg-gray-400 text-white hover:bg-gray-500";
			break;
		case "success":
			className += " bg-green-500 text-white hover:bg-green-600";
			break;
		default:
			break;
	}

	return (
		<button onClick={onClick} className={className} {...props}>
			{children}
		</button>
	);
}

export default Button;
