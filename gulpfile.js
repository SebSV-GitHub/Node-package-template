import { series, src, dest } from "gulp";
import { load, clean, restore } from "clean-package";

function pack() {
	let content;
	let compiledConfig;

	function cleanPackageJSON(callback) {
		[content, compiledConfig] = load("package.json", {
			remove: ["devDependencies", "scripts"],
		});
		clean(content, compiledConfig);
		callback();
	}

	function restorePackageJSON(callback) {
		restore(compiledConfig);
		callback();
	}

	function moveFiles() {
		return src(["package.json", "LICENSE"]).pipe(dest("dist"));
	}

	return series(cleanPackageJSON, moveFiles, restorePackageJSON);
}

export default pack();
