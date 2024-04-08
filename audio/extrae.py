import os
from mutagen.easyid3 import EasyID3


# Función para obtener los metadatos de un archivo MP3
def get_metadata(file_path):
    try:
        audio = EasyID3(file_path)
        title = audio["title"][0] if "title" in audio else os.path.basename(file_path)
        artist = audio["artist"][0] if "artist" in audio else "Unknown Artist"
        return f"{title} - {artist}"
    except Exception as e:
        print(f"Error obteniendo metadatos de {file_path}: {e}")
        return None


# Carpeta donde se encuentra el archivo Python
directorio_actual = os.path.dirname(os.path.abspath(__file__))

# Lista para almacenar los datos de los archivos MP3
playlist = []

# Iterar sobre los archivos en el directorio actual
for file_name in os.listdir(directorio_actual):
    if file_name.endswith(".mp3"):
        file_path = os.path.join(directorio_actual, file_name)
        metadata = get_metadata(file_path)
        if metadata:
            playlist.append({"title": metadata, "src": file_path})

# Escribir los datos en un archivo de texto
with open("playlist.txt", "w") as file:
    for item in playlist:
        file.write(str(item) + "\n")
