import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://web-production-40ac.up.railway.app/swagger-json",
  apiFile: "./src/generated/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFiles: {
    "./src/generated/service/startups/startups.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("startup"),
    },
    "./src/generated/service/campaigns/campaign.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("campaign"),
    },
    "./src/generated/service/wallet/wallet.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("wallet"),
    },
    "./src/generated/service/subscription.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("subscriptions"),
    },
    "./src/generated/service/users.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("users"),
    },
    "./src/generated/service/transactions/transactions.ts": {
      filterEndpoints: (endpointName) =>
        endpointName.toLowerCase().startsWith("transactions"),
    },
  },
  exportName: "api",
  hooks: true,
};

export default config;
