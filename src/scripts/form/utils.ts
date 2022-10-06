export function parseFormConfig2Json() {
	const configFiles = loadFormConfigFiles();

	for (const [path, config] of Object.entries(configFiles)) {
		console.log(path, config);
	}
}

export function exportFormConfigJson() {}

export function loadFormConfigFiles() {
	return import.meta.glob("./config.*.json", {
		import: "default",
		eager: true,
	});
}
