# Currency Conversion App 💱💹

Welcome to the Currency Conversion App! This interactive application, built with Angular, offers a wide range of functionalities for live exchange rates, currency conversion, and comparison of conversion rates between different currencies.

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

## Overview 🌐

The Currency Conversion App brings you real-time currency insights and operations, powered by Angular and leveraging the robust capabilities of RxJS for state management.

## Features 🚀

- 🔄 **Live Exchange Rates**: Stay updated with live exchange rates for different currencies.
- 🔄 **Currency Conversion**: Seamlessly convert currency values from one type to another.
- 🔄 **Comparison of Conversion Rates**: Compare conversion rates between two currencies.
- ⭐ **Favorite Currencies**: Mark your favorite currencies for quick access.
- 📱 **Responsive UI**: Enjoy a responsive user interface across devices.

## Tech Stack 🛠️

- 🅰️ **Angular**: A dynamic framework for building user interfaces.
- 📜 **TypeScript**: A powerful programming language for building robust applications.
- ➰ **RxJS**: A reactive programming library for handling asynchronous operations.
- 🎨 **SCSS**: A CSS preprocessor for organized and maintainable styles.
- 🌟 **Tailwind CSS**: A utility-first CSS framework for efficient UI development.

## API Documentation 📖

The Currency Conversion App communicates with a REST API to fetch and manage currency data. The `fetch-data.service.ts` encapsulates the API endpoints.

### CurrencyService: Managing Real-time Currency Data

The `CurrencyService` is the backbone of the app, handling real-time currency data, fetching exchange rates, and currency conversion operations. This service streamlines communication with the backend API and offers features that ensure smooth app operation.

### SharedService: Base Currency and Exchange Rates

The `SharedService` is essential for managing currency selection and exchange rate retrieval. It enhances user experience by allowing base currency selection and fetching up-to-date exchange rates.

## Installation ⚙️

1. **Clone the Repository**: `git clone [repository_url]`.
2. **Navigate to the Directory**: `cd currency-conversion-app`.
3. **Install Dependencies**: `npm install`.

## Usage 🖥️

1. **Start the Development Server**: `ng serve`.
2. **Access the App**: Open your browser and visit `http://localhost:4200`.

## Input Validation and Alerts ⚠️

To ensure accurate conversions, the app employs robust input validation. It uses engaging emojis to enhance error alerts:

- 🚫 **Invalid Amount**: Displays a red cross emoji for invalid amount entries.
- ⚠️ **Insufficient Funds**: Warns users with an exclamation emoji if they attempt to convert more than they have.
- ✅ **Conversion Success**: Celebrates successful conversions with a green checkmark emoji.

## Contributing 👥

Contributions are encouraged! Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Styling 🎨

SCSS and Tailwind CSS make up the app's stylish interface. Global styles can be found in `styles.scss`.

## License 📜

This project is under the MIT License. Check the [LICENSE](LICENSE) file for details.

Feel free to explore and engage with the Currency Conversion App! Your feedback and contributions are invaluable to us. 🌟
