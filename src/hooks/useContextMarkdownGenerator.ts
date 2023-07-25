import { useContext } from "react";
import { MarkdownContext } from "../context/markdown-generator";

export const useContextMarkdownGenerator = () => {
	const context = useContext(MarkdownContext);

	if (!context)
		throw new Error(
			"useContextMarkdownGenerator must be within MarkdownProvider"
		);

	return context;
};
