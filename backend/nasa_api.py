import requests

# API para obtener datos de la humedad del suelo (SMAP)
def get_smap_data():
    url = "https://api.nasa.gov/smap-endpoint"
    response = requests.get(url, params={'api_key': 'TU_API_KEY'})
    if response.status_code == 200:
        return response.json()
    return {"error": "Error fetching SMAP data"}

# API para obtener datos de precipitación (IMERG)
def get_imerg_data():
    url = "https://api.nasa.gov/imerg-endpoint"
    response = requests.get(url, params={'api_key': 'TU_API_KEY'})
    if response.status_code == 200:
        return response.json()
    return {"error": "Error fetching IMERG data"}

# API para obtener datos de vegetación (MODIS)
def get_modis_data():
    url = "https://api.nasa.gov/modis-endpoint"
    response = requests.get(url, params={'api_key': 'TU_API_KEY'})
    if response.status_code == 200:
        return response.json()
    return {"error": "Error fetching MODIS data"}
