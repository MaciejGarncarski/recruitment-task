import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
export default config;
