import { qs } from "./utils/query-selector";

const initialRender = () => {
	let app = qs("#app")
	app!.innerHTML = `
		<h3 style="color: #fff">hello</h3>
	`
}

// initialRender()