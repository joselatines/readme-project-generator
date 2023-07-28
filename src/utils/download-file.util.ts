export function downloadFile(
	plainData: string,
	fileName: string,
	type = "text/plain"
) {
	const fileData = plainData;
	const blob = new Blob([fileData], { type });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.download = fileName;
	link.href = url;
	link.click();
}
