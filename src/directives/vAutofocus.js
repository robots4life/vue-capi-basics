// Global Directives
// the name of the custom directive HAS to start with a "v" and then the name of the directive
//
// to make the global directive available to other files we "export" it
export const vAutofocus = {
	mounted: (element) => {
		console.log(element);
		element.focus();
	}
};
