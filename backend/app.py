from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

API_KEY = os.getenv("OPENWEATHER_API_KEY")

@app.route("/weather")
def get_weather():
    city = request.args.get("city")
    if not city:
        return jsonify({"error": "City parameter is required"}), 400

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({"error": "City not found or API error"}), response.status_code

    data = response.json()
    weather = {
        "city": data["name"],
        "temperature": data["main"]["temp"],
        "weather": data["weather"][0]["description"],
    }
    return jsonify(weather)

if __name__ == "__main__":
    app.run(debug=True)
