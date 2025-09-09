// convex/auth.config.ts

const authConfig = {
  providers: [
    {
      domain: "https://pleasing-cattle-19.clerk.accounts.dev",
      applicationID: "convex", // 👈 capital I, capital D
    },
  ],
};

export default authConfig;
