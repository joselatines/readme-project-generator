import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MarkdownProvider } from "./context/markdown-generator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MarkdownProvider>
			<App />
		</MarkdownProvider>
	</React.StrictMode>
);
