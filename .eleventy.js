const httpProxy = require("http-proxy");

module.exports = (eleventyConfig) => {
	eleventyConfig.addGlobalData("layout", "base");
	eleventyConfig.addGlobalData("env", process.env.ELEVENTY_ENV);

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
