import greet from "@/index.js";

describe("Index", () => {
	test("True", () => {
		const string_ = greet("World");
		expect(string_).toBe("Hello, World!");
	});
});
