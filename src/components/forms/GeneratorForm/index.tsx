import { useFormik } from "formik";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomTextarea from "../inputs/CustomTextarea";
import { validationSchema, initialValues, inputsList } from "./config";
import CustomCheckbox from "../inputs/CustomCheckbox";
import data from "../../../assets/data.json";
import {
	MarkdownTemplateNotParsed,
	MarkdownTemplate,
} from "../../../interfaces/markdown-template.interface";
import { useContextMarkdownGenerator } from "../../../hooks/useContextMarkdownGenerator";

// these are technologies that are not presented on the cdn icon provider
const prohibitedIcons = "photoshop, testing library, jest, xd, illustrator";

function GeneratorForm() {
	const { setTemplateData } = useContextMarkdownGenerator();

	// technologies that are not presented in prohibitedIcons
	const technologies = data.technologies.filter(
		tech => !prohibitedIcons.includes(tech.name)
	);

	const handleSubmit = (
		formValues: MarkdownTemplateNotParsed,
		actions: any
	) => {
		const featuresParsed = formValues.features.replace(", ", ",").split(",");

		const templateData: MarkdownTemplate = {
			...formValues,
			features: featuresParsed,
		};

		setTemplateData(templateData);
		// actions.resetForm();
	};

	const formik = useFormik({
		validationSchema,
		initialValues,
		onSubmit: handleSubmit,
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="font-bold mb-2 text-lg text-gray-700 "
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

			<span>Technologies used</span>
			<section className="flex flex-wrap gap-3">
				{technologies.map(tech => (
					<CustomCheckbox
						key={tech.label}
						formik={formik}
						label={tech.label}
						name={tech.name}
					/>
				))}
			</section>
			<i id="checkbox-icon" className="fa-solid fa-circle-check "></i>
			<button
				type="submit"
				/* disabled={formik.isSubmitting} */
				className={`btn mt-4 w-full`}
			>
				Generate markdown <i className="fa-solid fa-plus"></i>
			</button>
		</form>
	);
}

export default GeneratorForm;
