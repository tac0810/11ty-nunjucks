import { FormConfig } from "../form/types";
import { loadFormConfigFiles } from "../form/utils";
import { clone } from "../libs/justs";

export default (
	initialProps = {
		formType: "default",
	}
) => {
	return {
		formFields: [],

		async init() {
			const configFiles = loadFormConfigFiles();

			for (const [path, config] of Object.entries(configFiles)) {
				const [, configType] = path
					.split("/")
					.pop()
					.match(/config\.(.+?)\.json/);

				if (initialProps.formType === configType) {
					this.formFields = clone((config as FormConfig).fields);
				}
			}
		},
	};
};
