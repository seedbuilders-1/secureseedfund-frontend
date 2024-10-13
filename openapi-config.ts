import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile:
    "http://secureseedfund-api.us-east-1.elasticbeanstalk.com/swagger-json",
  apiFile: "./src/generated/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFiles: {
    "./src/generated/service/startups.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("startup"),
    },
    "./src/generated/service/campaign.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("campaign"),
    },
  },
  exportName: "api",
  hooks: true,
};

export default config;
