import { useFormik } from "formik";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomTextarea from "../inputs/CustomTextarea";
import { validationSchema, initialValues, inputsList } from "./config";
import CustomCheckbox from "../inputs/CustomCheckbox";
import metadata from "../../../assets/metadata.json";

function GeneratorForm() {
	// TODO: add generic interface from app world
	const handleSubmit = (e: any) => {
		console.log(typeof e);
		const featuresParsed = e.features.replace(", ", ",").split(",");
		console.log({ ...e, features: featuresParsed });
	};

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
			<section>
				{inputsList.map(input =>
					input.type === "text" ? (
						<CustomTextInput
							key={input.name}
							formik={formik}
							label={input.label}
							name={input.name}
							placeholder={input.placeholder}
						/>
					) : (
						<CustomTextarea
							key={input.name}
							formik={formik}
							label={input.label}
							name={input.name}
							placeholder={input.placeholder}
						/>
					)
				)}
			</section>

			<section className="flex flex-wrap gap-3">
				{metadata.technologies.map(tech => (
					<CustomCheckbox
						key={tech.label}
						formik={formik}
						label={tech.label}
						name={tech.name}
					/>
				))}
			</section>
			<div className="relative">
				<button
					type="submit"
					/* 	disabled={formik.isSubmitting}
					className={`btn ${formik.isSubmitting && "disabled"}`} */
				>
					Login
				</button>
			</div>
		</form>
	);
}

export default GeneratorForm;
