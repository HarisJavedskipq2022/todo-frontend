function TextArea({ label, value, onChange, ...rest }) {
	return (
		<div className="flex flex-col space-y-2">
			<label htmlFor={rest.id} className="text-sm font-semibold">
				{label}
			</label>
			<textarea
				value={value}
				onChange={onChange}
				className="border p-2 rounded w-full"
				{...rest}
			/>
		</div>
	);
}

export default TextArea;
