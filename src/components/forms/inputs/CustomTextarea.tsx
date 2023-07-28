import { IInputProps } from "./input.interface";

function CustomTextarea({ formik, name, label, placeholder }: IInputProps) {
	return (
		<div className="mb-4">
			<div className="mb-4">
				<label
					className="block text-gray-700 font-bold mb-2"
					htmlFor={name}
				>
					{label}
				</label>
				<textarea
					className={`resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						formik.touched[name] && formik.errors[name]
							? "border-red-400"
							: "border-gray-300"
					}`}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values[name]}
				/>

				{formik.touched[name] && formik.errors[name] && (
					<span className="text-red-400">{formik.errors[name]}</span>
				)}
			</div>
		</div>
	);
}

export default CustomTextarea;
