const httpProxy = require("http-proxy");
const path = require("path");
const requireGlob = require('require-glob');

function copyFormConfigFiles(eleventyConfig) {
	const ROOT = __dirname;
	const CONFIG_DIR = "/src/scripts/form";

	eleventyConfig.addGlobalData("form", async () => {
		return await requireGlob(path.join(ROOT, CONFIG_DIR, "config.*.json"));
	});

}

module.exports = (eleventyConfig) => {
	eleventyConfig.addGlobalData("layout", "base");
	eleventyConfig.addGlobalData("env", process.env.ELEVENTY_ENV);

	// eleventyConfig.setWatchThrottleWaitTime(200);
	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function (_err, browserSync) {
				const proxy = httpProxy.createProxyServer();

				browserSync.addMiddleware("*", (req, res) => {
					proxy.web(req, res, { target: "http://localhost:5173" });
				});
			},
		},
	});

	copyFormConfigFiles(eleventyConfig);

	// Parse static dir on production.
	if (process.env.ELEVENTY_ENV === "production") {
		eleventyConfig.addPassthroughCopy({ static: "." });
	}

	return {
		dir: {
			input: "src/site/pages",
			includes: "../includes",
			layouts: "../layouts",
			data: "../data",
			output: "dist",
		},
		passthroughFileCopy: true,
	};
};
