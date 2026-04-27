# hello-metal

Expo app that talks to the [Dog CEO API](https://dog.ceo/dog-api/) using Axios and TanStack React Query.

## Stack

- **Expo** — app shell and tooling
- **React Navigation** — native stack navigation
- **Axios** — HTTP client
- **TanStack React Query** — server state and caching

## Run locally

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment** — create a `.env` in the project root with:

   ```env
   EXPO_PUBLIC_API_URL=https://dog.ceo/api/
   ```

3. **Start Metro** — pick one:

   **Expo Go** — scan the QR code in the [Expo Go](https://expo.dev/go) app, or press `i` / `a` for a simulator:

   ```bash
   npx expo start
   ```

   **Development build** — if you use a custom dev client ([docs](https://docs.expo.dev/develop/development-builds/introduction/)):

   ```bash
   npx expo start --dev-client
   ```

4. Open the project from the dev tools UI when prompted.

## Builds

Latest Expo build: [hello-metal on Expo](https://expo.dev/accounts/iresh13/projects/hello-metal/builds/05079d39-c1a4-4e09-9cbf-58cf2cc0c112).

-- Generated using Claude
