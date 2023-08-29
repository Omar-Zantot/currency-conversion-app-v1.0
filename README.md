# Currency Conversion App 💱💹

Welcome to the Currency Conversion App! This application is built with Angular and provides functionalities for live exchange rates, currency conversion, and comparison of conversion rates between different currencies.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Documentation](#api-documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Input Validation and Alerts](#input-validation-and-alerts)
- [Contributing](#contributing)
- [Styling](#styling)
- [License](#license)

## Overview

The Currency Conversion App allows users to perform various currency-related operations, including real-time exchange rate information, currency conversion, and comparing conversion rates. The app uses Angular's powerful features and RxJS for state management.

## Features

- Fetch live exchange rates for different currencies.
- Perform currency conversion from one currency to another.
- Compare conversion rates between two different currencies.
- Select favorite currencies for quick access.
- Responsive user interface for seamless usage on different devices.

## Tech Stack

- Angular: Frontend framework for building user interfaces.
- TypeScript: Programming language for building robust and scalable applications.
- RxJS: Reactive programming library for handling asynchronous operations.
- SCSS: CSS preprocessor for more organized and maintainable styles.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.



## API Documentation

The application communicates with a backend REST API to fetch and update currency data. The API endpoints are encapsulated within the `fetch-data.service.ts` file.
## CurrencyService: Real-time Currency Data Handling

The `CurrencyService` class is a core component of the Currency Conversion App responsible for managing real-time currency data, fetching exchange rates, and handling currency conversion operations. This service encapsulates communication with the backend API and provides several features that contribute to the seamless operation of the app.

### Features and Benefits

- **Currency Data Management:** The `CurrencyService` fetches a list of available currencies from the backend API and manages them as an observable store. It also allows the user to mark favorite currencies for quick access. This ensures that users can conveniently select and convert between their preferred currencies.

- **Real-time Exchange Rates:** By utilizing the `getLiveExchangeRates` method, the service retrieves real-time exchange rates between the base currency and a list of target currencies. This feature provides users with up-to-date information, enabling accurate currency conversion.

- **Automatic Data Refresh:** The service implements an automatic data refresh mechanism. It periodically queries the backend API for the latest currency data and updates the observable store. This ensures that the app always displays current currency information, enhancing the user experience.

- **Currency Conversion:** The `getConvertResult` method enables users to perform currency conversions between two specified currencies and an amount. This functionality is essential for users who want to understand the equivalent value of their money in a different currency.

- **Currency Comparison:** The service also offers the ability to compare the conversion results for different target currencies using the `getCompareResult` method. This feature is particularly useful when users want to evaluate which currency provides the best value in terms of conversion.

- **Input Validation and Alerts:** The service integrates input validation to ensure that users provide valid input for currency conversion. If users enter invalid amounts or attempt to convert more currency than they have, the app displays appropriate alerts with engaging emojis to enhance the user experience.

In summary, the `CurrencyService` class plays a pivotal role in ensuring that the Currency Conversion App provides accurate, up-to-date, and user-friendly currency-related functionalities. It simplifies the process of fetching currency data, performing conversions, and presenting the results to the user, contributing to a comprehensive and engaging user experience.

## SharedService: Managing Currency Selection and Exchange Rates

The `SharedService` class is a crucial component within the Currency Conversion App responsible for managing the selection of currencies and handling the retrieval of exchange rates. This service focuses on enhancing user experience by enabling users to select their preferred base currency and fetching real-time exchange rates for the selected currencies.

### Features and Benefits

- **Base Currency Selection:** The `SharedService` allows users to select their preferred base currency. This currency acts as a reference point for currency conversions and exchange rate calculations. Users can change the base currency to quickly see how other currencies compare to it.

- **Exchange Rate Retrieval:** Using the `fetchExchangeRates` method, the service retrieves real-time exchange rates for the selected currencies. It ensures that the rates are up-to-date, providing accurate conversion results and helping users make informed decisions.

- **Dynamic Rate Mapping:** The service dynamically maps exchange rates to the corresponding currencies. It ensures that each currency in the list of selected currencies receives its appropriate exchange rate based on the fetched data. This enables accurate currency conversion calculations.

- **Observable Pattern:** The service utilizes observables to track changes in the selected base currency. This approach ensures that the app stays in sync with the user's preferences and updates the UI dynamically as the base currency changes.

- **User-Friendly Interface:** By providing a seamless way to manage base currency selection and exchange rates, the `SharedService` contributes to a user-friendly interface. Users can easily switch between base currencies and receive updated exchange rate information without any hassle.

- **Collaboration with CurrencyService:** The `SharedService` collaborates with the `CurrencyService` to fetch exchange rates and work with currency-related data. This separation of concerns enhances code organization and modularity.

In summary, the `SharedService` class is a vital part of the Currency Conversion App that enables users to manage their base currency preference and ensures accurate and up-to-date exchange rate information. By providing these functionalities, the service enhances the usability of the app and empowers users to make well-informed currency conversion decisions.



## Installation

1. Clone the repository.
2. Navigate to the project directory: `cd currency-conversion-app`.
3. Install dependencies: `npm install`.

## Usage

1. Start the development server: `ng serve`.
2. Open a web browser and navigate to `http://localhost:4200`.

## Input Validation and Alerts

To ensure accurate currency conversion, the app employs robust input validation. When users provide invalid input, the app uses engaging emojis to make the error alerts more impressive. For instance:

- 🚫 Invalid amount: If the entered amount is not a valid number, an alert with a red cross emoji is displayed.
- ⚠️ Insufficient funds: If the user attempts to convert more currency than they have, a warning alert with an exclamation emoji appears.
- ✅ Conversion success: When a successful currency conversion occurs, a green checkmark emoji is displayed to indicate success.

## Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## Styling

The application uses SCSS and Tailwind CSS for styling. Global styles can be found in the `styles.scss` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
