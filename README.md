# GeorideTrips

GeorideTrips is a project made with Angular (v16.1.4) to display your recent motorcycle trips from the [Georide API](https://api.georide.fr/).

## Georide
Georide is a french company that provides a battery-powered box with security and GPS features to protect your motorcycle.

## Configuration
Configure the `environment.development.ts` file for development or `environment.ts` file for production with your authentication token and your tracker id.
``` js
export const environment = {
    authToken: "georide-auth-token", // Follow instructions here: https://api.georide.fr/#api-User-LoginUser
    trackerId: 0, // Follow instructions here: https://api.georide.fr/#api-User-UserTrackers
};
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
