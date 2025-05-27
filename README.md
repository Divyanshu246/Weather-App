 # Weather App

A simple weather application built with React frontend and Flask backend that provides real-time weather information for any city using the OpenWeatherMap API.

![image](https://github.com/user-attachments/assets/b18d7067-752c-4e56-857b-45eb5d615797)

## Features

- 🌤️ Real-time weather data
- 🏙️ Search weather by city name
- 🌡️ Temperature display in Celsius
- 💨 Wind information
- 📱 Responsive design
- 🎨 Clean and modern UI

## Tech Stack

**Frontend:**
- React.js
- CSS3
- Fetch API

**Backend:**
- Flask (Python)
- Flask-CORS
- Requests library
- python-dotenv

**API:**
- OpenWeatherMap API

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- Python (v3.7 or higher)
- npm or yarn
- OpenWeatherMap API key

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd weather-app
```

### 2. Backend Setup

#### Install Python dependencies
```bash
pip install flask flask-cors requests python-dotenv
```

#### Create environment file
Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
OPENWEATHER_API_KEY=your_api_key_here
```

**Note:** Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

### 3. Frontend Setup

#### Install Node.js dependencies
```bash
npm install
# or
yarn install
```

## Running the Application

### 1. Start the Flask Backend
```bash
python app.py
```
The backend server will start on `http://localhost:5000`

### 2. Start the React Frontend
In a new terminal window:
```bash
npm start
# or
yarn start
```
The frontend will start on `http://localhost:3000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a city name in the input field
3. Click "Get Weather" button
4. View the current weather information including:
   - City name
   - Temperature
   - Weather description
   - Weather icon
   - Wind information

## API Endpoints

### GET /weather
Retrieves weather data for a specified city.

**Parameters:**
- `city` (required): Name of the city

**Example:**
```
GET http://localhost:5000/weather?city=London
```

**Response:**
```json
{
  "name": "London",
  "main": {
    "temp": 15.2,
    "feels_like": 14.8,
    "humidity": 72
  },
  "weather": [
    {
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "wind": {
    "speed": 3.5,
    "deg": 240
  }
}
```

## Project Structure

```
weather-app/
│
├── app.py              # Flask backend server
├── app.css             # Styles for React app
├── React.js            # Main React component
├── index.js            # React app entry point
├── .env                # Environment variables (not tracked)
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

## Error Handling

The application includes error handling for:
- Invalid city names
- API connection issues
- Missing API key
- Network errors

## Known Issues

There's a small discrepancy in the React component where it tries to access `weather.city`, `weather.temperature`, `weather.description`, and `weather.icon`, but the backend returns different field names. The backend returns:
- `name` (not `city`)
- `main.temp` (not `temperature`)
- `weather[0].description` (not `description`)
- `weather[0].icon` (not `icon`)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Flask](https://flask.palletsprojects.com/) for the backend framework
- [React](https://reactjs.org/) for the frontend framework

## Support

If you have any questions or run into issues, please open an issue on GitHub or contact the maintainer.

---

**Note:** Make sure to keep your API key secure and never commit it to version control. Always use environment variables for sensitive information.
