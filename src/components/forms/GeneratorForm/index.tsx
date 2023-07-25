import { useFormik } from "formik";
import CustomTextInput from "../inputs/CustomTextInput";
import CustomTextarea from "../inputs/CustomTextarea";
import { validationSchema, initialValues, inputsList } from "./config";
import CustomCheckbox from "../inputs/CustomCheckbox";
import metadata from "../../../assets/metadata.json";
import {
	MarkdownTemplateNotParsed,
	MarkdownTemplate,
} from "../../../interfaces/markdown-template.interface";
import { useContextMarkdownGenerator } from "../../../hooks/useContextMarkdownGenerator";

function GeneratorForm() {
	const { setTemplateData } = useContextMarkdownGenerator();

	const handleSubmit = (formValues: MarkdownTemplateNotParsed) => {
		const featuresParsed = formValues.features.replace(", ", ",").split(",");

		const templateData: MarkdownTemplate = {
			...formValues,
			features: featuresParsed,
		};

		setTemplateData(templateData);
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
