import sys
from flask import Flask, jsonify
import psycopg2
import requests
from nasa_api import get_smap_data, get_imerg_data, get_modis_data

# Forzar que la salida estándar use codificación UTF-8
sys.stdout.reconfigure(encoding='utf-8')

app = Flask(__name__)

# Conexión con la base de datos PostgreSQL (usando puerto 5433 si es necesario)
conn = psycopg2.connect(
    database="agriculture_data",
    user="postgres",
    password="mysecretpass",
    host="localhost",
    port="5432",  # Si tu PostgreSQL corre en otro puerto, cámbialo a "5433"
    client_encoding="utf8"  # Aseguramos que la codificación sea UTF-8
)
cursor = conn.cursor()

# Ruta para obtener la humedad del suelo (SMAP)
@app.route('/api/soil_moisture', methods=['GET'])
def soil_moisture():
    data = get_smap_data()  # Función que hace el request a la API de SMAP
    return jsonify(data)

# Ruta para obtener datos de precipitación (IMERG)
@app.route('/api/precipitation', methods=['GET'])
def precipitation():
    data = get_imerg_data()  # Función para la API de IMERG
    return jsonify(data)

# Ruta para obtener datos de vegetación (MODIS)
@app.route('/api/vegetation', methods=['GET'])
def vegetation():
    data = get_modis_data()  # Función para la API de MODIS
    return jsonify(data)

# Ejecutar la aplicación Flask
if __name__ == '__main__':
    app.run(debug=True)
