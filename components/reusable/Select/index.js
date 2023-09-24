function Select({ label, value, onChange, options, ...rest }) {
	return (
		<div className="flex flex-col space-y-2">
			<label htmlFor={rest.id} className="text-sm font-semibold">
				{label}
			</label>
			<select
				value={value}
				onChange={onChange}
				className="border p-2 rounded w-full"
				{...rest}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}

export default Select;
