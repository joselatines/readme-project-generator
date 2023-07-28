import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import GeneratorForm from "./components/forms/GeneratorForm";
import MarkdownPreview from "./components/forms/MarkdownPreview";

function App() {
	return (
		<>
			<Navigation />
			<main className="grid gap-10 md:grid-cols-2 p-8">
				<GeneratorForm />
				<MarkdownPreview />
			</main>
			<Footer />
		</>
	);
}

export default App;
