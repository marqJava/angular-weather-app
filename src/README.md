# Angular Weather App

## Overview

The Angular Weather App is a web application that allows users to check the current weather and weather forecast for a specified location. The app uses the OpenWeatherMap API to retrieve weather data, and it provides a user-friendly interface to display the weather information.

## Features

- Get current weather information for a specified location.
- View weather forecast for the next few days.
- Responsive design for optimal user experience on various devices.

## Technologies Used

- Angular: The frontend of the application is developed using Angular, a popular and powerful framework for building web applications.
- OpenWeatherMap API: The app fetches weather data from the OpenWeatherMap API, which provides accurate weather information for various locations worldwide.

## Installation

Follow the steps below to run the Angular Weather App locally:

1. Clone the repository:

git clone https://github.com/your-username/angular-weather-app.git
cd angular-weather-app


2. Install dependencies:

npm install

3. Obtain an API key from OpenWeatherMap:

- Visit the OpenWeatherMap website (https://openweathermap.org/) and sign up for a free account.
- After signing up, you'll receive an API key that you'll need to access the weather data. Copy this API key.

4. Set up the API key in the app:

- In the project, navigate to `src/environments/environment.ts`.
- Replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual API key obtained from OpenWeatherMap:

```typescript
export const environment = {
  production: false,
  apiKey: 'YOUR_OPENWEATHERMAP_API_KEY',
};
```

Run the app:
ng serve

    Open your browser and navigate to http://localhost:4200/ to view the app.

Usage

    On the home page, enter the name of the location you want to check the weather for in the search bar.

    Click the "Get Weather" button to fetch the current weather and display it on the screen.

    Scroll down to view the weather forecast for the next few days.

Contributing

Contributions to the Angular Weather App are welcome! If you find a bug or have an idea for an enhancement, please create an issue in the repository.

If you would like to contribute code, please follow these steps:

    Fork the repository.

    Create a new branch for your feature or bug fix:
    
    git checkout -b feature/new-feature
    
Make your changes and commit them with descriptive commit messages.

Push the changes to your forked repository:

git push origin feature/new-feature

    Create a pull request from your branch to the main repository's main branch.

    The pull request will be reviewed, and once approved, your changes will be merged into the main project.

License

The Angular Weather App is open-source and released under the MIT License.