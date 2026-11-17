from PIL import Image
import os

# Define a pasta atual
pasta = '.' 

for arquivo in os.listdir(pasta):
    if arquivo.lower().endswith(('.png', '.jpg', '.jpeg')):
        caminho_completo = os.path.join(pasta, arquivo)
        imagem = Image.open(caminho_completo)
        
        # Define o nome do novo arquivo webp
        nome_base = os.path.splitext(arquivo)[0]
        novo_caminho = os.path.join(pasta, f"{nome_base}.webp")
        
        # Salva em WebP com qualidade 80 (ajuste se necessário para ficar < 1MB)
        imagem.save(novo_caminho, 'webp', quality=80)
        print(f"Convertido: {novo_caminho}")