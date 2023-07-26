import { useState } from "react";
import showdown from "showdown";
import renderHtml from "html-react-parser";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useContextMarkdownGenerator } from "../../hooks/useContextMarkdownGenerator";
function MarkdownPreview() {
	const { markdownTemplate } = useContextMarkdownGenerator();
	const [html, setHtml] = useState<null | string>(markdownTemplate);

	function exportUserInfo(userInfo: any) {
		const fileData = markdownTemplate;
		const blob = new Blob([fileData], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.download = "user-info.md";
		link.href = url;
		link.click();
	}

	const handle = () => {
		const converter = new showdown.Converter();
		const htmlConverted = converter.makeHtml(markdownTemplate);
		console.log({ htmlConverted });
		setHtml(htmlConverted);
	};
	return (
		<div>
			<button onClick={handle}>click</button> MarkdownPreview
			<div>{html ? renderHtml(html) : "loading"}</div>
			<CopyToClipboard text={markdownTemplate}>
				<button onClick={exportUserInfo}>
					<i className="fa-solid fa-copy"></i>Copy to clipboard
				</button>
			</CopyToClipboard>
		</div>
	);
}

export default MarkdownPreview;
