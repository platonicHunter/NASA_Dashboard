
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000/api/nasa';

// 1. APOD (Astronomy Picture of the Day) Data Fetching
export async function fetchApod() {
  try {
    const res = await fetch(`${BACKEND_URL}/apod`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch APOD: Status ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('APOD Fetch Error:', error);
    return null;
  }
}

// 2. Asteroids Data Fetching
export async function fetchAsteroids() {
  try {
    const res = await fetch(`${BACKEND_URL}/asteroids`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch Asteroids data: Status ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Asteroids Fetch Error:', error);
    return null;
  }
}

// 3. Mars Rover Photos Fetching
export async function fetchMarsPhotos() {
  try {
    const res = await fetch(`${BACKEND_URL}/mars-rover`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch Mars Rover photos: Status ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Mars Photos Fetch Error:', error);
    return null;
  }
}