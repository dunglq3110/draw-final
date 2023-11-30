// functions related to tools

pg.tools = (function () {
	let toolList = [];

	let registerTool = function (toolInfos) {
		toolList.push(toolInfos);
	};

	let getToolList = function () {
		return toolList;
	};

	const getToolInfoByID = function (id) {
		for (const tool of toolList) {
			if (tool.id == id) {
				return tool;
			}
		}
	};

	// localstorage
	const getLocalOptions = function (options) {
		const storageJSON = localStorage.getItem("pg.tools." + options.id);
		if (storageJSON && storageJSON.length > 0) {
			let storageOptions = JSON.parse(storageJSON);

			// only overwrite options that are stored
			// new options will use their default value
			for (let option in options) {
				if (storageOptions.hasOwnProperty(option)) {
					options[option] = storageOptions[option];
				}
			}
		}
		return options;
	};

	const setLocalOptions = function (options) {
		const optionsJSON = JSON.stringify(options, null, 2);
		localStorage.setItem("pg.tools." + options.id, optionsJSON);
	};

	const deleteLocalOptions = function (id) {
		localStorage.removeItem("pg.tools." + id);
	};

	return {
		registerTool: registerTool,
		getToolList: getToolList,
		getToolInfoByID: getToolInfoByID,
		getLocalOptions: getLocalOptions,
		setLocalOptions: setLocalOptions,
		deleteLocalOptions: deleteLocalOptions,
	};
})();
