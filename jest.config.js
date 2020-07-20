const tsconfig = require("./test/tsconfig.test.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  testEnvironment: "node",
  moduleNameMapper,
  moduleFileExtensions: ["ts", "js"],
};
