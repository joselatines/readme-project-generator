import { useFormik } from "formik";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomTextarea from "../inputs/CustomTextarea";
import { validationSchema, initialValues, inputsList } from "./config";

function GeneratorForm() {
	// TODO: add generic interface from app world
	const handleSubmit = (e: any) => console.log(e);

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
		>
			<div>
				{inputsList.map(input =>
					input.type === "text" ? (
						<CustomTextInput
							formik={formik}
							label={input.label}
							name={input.name}
							placeholder={input.placeholder}
						/>
					) : (
						<CustomTextarea
							formik={formik}
							label={input.label}
							name={input.name}
							placeholder={input.placeholder}
						/>
					)
				)}
			</div>

			<div className="relative">
				<button
					type="submit"
					disabled={formik.isSubmitting}
					className={`btn ${formik.isSubmitting && "disabled"}`}
				>
					Login
				</button>
			</div>
		</form>
	);
}

export default GeneratorForm;
