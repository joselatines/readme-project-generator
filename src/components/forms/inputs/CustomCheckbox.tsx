import { IInputProps } from "./input.interface";

function CustomCheckbox({ formik, name, label }: IInputProps) {
	const iconPath = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target;
		const checkboxesList: string[] = formik.values["technologies"];

		if (checked) {
			formik.setFieldValue("technologies", [
				...formik.values["technologies"],
				name,
			]);
		} else {
			formik.setFieldValue(
				"technologies",
				checkboxesList.filter(v => v !== name)
			);
		}
	};
	return (
		<label htmlFor={name}>
			<div className="bg-white p-4 border border-red-500">
				<input
					type="checkbox"
					name={name}
					id={name}
					onChange={handleChange}
					onBlur={formik.handleBlur}
					value={formik.values[name]}
				/>
				<img width={100} height={100} src={iconPath} alt={label} />
			</div>
		</label>
	);
}

export default CustomCheckbox;
