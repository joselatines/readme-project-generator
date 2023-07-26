import GeneratorForm from "./components/forms/GeneratorForm";
import MarkdownPreview from "./components/forms/MarkdownPreview";

function App() {
	return (
		<main className="grid col-span-2">
			<GeneratorForm />
			<MarkdownPreview />
		</main>
	);
}

export default App;
