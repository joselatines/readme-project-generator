import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsFillClipboardFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import { downloadFile } from "../../../utils/download-file.util";

function Actions({ markdownData }: { markdownData: string }) {
	const notify = (text: string) => toast.success(text);

	function handleDownloadClick(plainData: string) {
		downloadFile(plainData, "README.md");

		notify("Downloaded successfully");
	}

	return (
		<div className="flex gap-2">
			<CopyToClipboard text={markdownData}>
				<button className="btn" onClick={() => notify("Copied successfully")}>
					<BsFillClipboardFill />
				</button>
			</CopyToClipboard>

			<button className="btn" onClick={() => handleDownloadClick(markdownData)}>
				<FaFileDownload />
			</button>
		</div>
	);
}

export default Actions;
