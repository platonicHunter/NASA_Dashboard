from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI(title="NASA Real Data API Engine")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NASA Official Free API Key (စမ်းသပ်ရန် DEMO_KEY ကို သုံးနိုင်သည်)
NASA_API_KEY = "DEMO_KEY"

# 1. APOD (Astronomy Picture of the Day)
@app.get("/api/nasa/apod")
def get_apod_data():
    url = f"https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}"
    response = requests.get(url)
    return response.json()

# 2. NeoWs (Near Earth Object Web Service - Asteroid Data)
@app.get("/api/nasa/asteroids")
def get_asteroid_data():
    url = f"https://api.nasa.gov/neo/rest/v1/feed/today?detailed=false&api_key={NASA_API_KEY}"
    response = requests.get(url)
    data = response.json()
    
    # Dashboard မှာ တင်ပြရလွယ်ကူအောင် လိုအပ်သော အချက်အလက်များ ခွဲထုတ်ခြင်း
    element_count = data.get("element_count", 0)
    near_earth_objects = data.get("near_earth_objects", {})
    
    return {
        "element_count": element_count,
        "raw_objects": near_earth_objects
    }

# 3. Mars Rover Photos (Curiosity Rover)
@app.get("/api/nasa/mars-rover")
def get_mars_rover_photos():
    url = f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key={NASA_API_KEY}"
    response = requests.get(url)
    data = response.json()
    
    # ဓာတ်ပုံ ပထမ ၁၀ ပုံကို ခွဲထုတ်ယူခြင်း
    photos = data.get("photos", [])[:10]
    return {
        "count": len(photos),
        "photos": photos
    }