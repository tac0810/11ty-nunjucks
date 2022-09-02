import "../styles/index.css";
import Alpine from "alpinejs";
import collapse from '@alpinejs/collapse'
import components from "./components";

// https://vitejs.dev/guide/env-and-mode.html#env-variables
if (import.meta.env.DEV) {
	console.log({
		BASE_URL: import.meta.env.BASE_URL,
		PROD: import.meta.env.PROD,
		DEV: import.meta.env.DEV,
	});
}

(window as any).Alpine = Alpine;



Alpine.plugin(collapse)
Alpine.plugin(components);

Alpine.start();
