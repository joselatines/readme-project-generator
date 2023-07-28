import { useState, useEffect } from "react";
import showdown from "showdown";
import renderHtml from "html-react-parser";
import { useContextMarkdownGenerator } from "../../../hooks/useContextMarkdownGenerator";
import Actions from "./Actions";
import style from "./style.module.css";

function MarkdownPreview() {
	const { markdownTemplate } = useContextMarkdownGenerator();
	const [html, setHtml] = useState<string | null>(null);

	useEffect(() => {
		const converter = new showdown.Converter();
		const htmlConverted = converter.makeHtml(markdownTemplate);
		setHtml(htmlConverted);
	}, [markdownTemplate]);

	return (
		<div className="bg-white relative rounded-md p-8">
			{html && <Actions markdownData={markdownTemplate} />}

			<div className={style.container}>
				{html ? (
					renderHtml(html)
				) : (
					<span className="text-lg font-bold text-neutral-500">
						Generate your awesome README.md
					</span>
				)}
			</div>

			{html && <Actions markdownData={markdownTemplate} />}
		</div>
	);
}

export default MarkdownPreview;
