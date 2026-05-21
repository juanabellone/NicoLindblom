# Nico Lindblom — Press Kit

Sitio web de press kit para Nico Lindblom. HTML/CSS/JS puro, listo para deploy en Vercel.

## Estructura

```
nico-lindblom-presskit/
├── index.html          # Página principal
├── styles.css          # Estilos (minimalista elegante)
├── script.js           # Interactividad (scroll, lightbox, nav)
├── images/             # Carpeta de imágenes (ver abajo)
│   ├── hero.jpg        # Foto principal del hero (recomendado: 1920x1080+)
│   ├── bio.jpg         # Foto para la sección bio (retrato, 3:4)
│   ├── lado-b.jpg      # Portada álbum Lado B (cuadrada)
│   ├── sesion-martina.jpg  # Portada Sesión en Martina
│   ├── collage.jpg     # Portada álbum Collage
│   ├── sesiones-cuarentena.jpg  # Portada EP
│   ├── press-1.jpg     # Foto de prensa 1
│   ├── press-2.jpg     # Foto de prensa 2
│   ├── press-3.jpg     # Foto de prensa 3
│   └── press-4.jpg     # Foto de prensa 4
└── README.md
```

## Agregar las imágenes

Las fotos están en Google Drive: [Fotos de prensa](https://drive.google.com/drive/folders/1-7mkzoK_1HzH2FegKx0bBKBKkUJNTDnL?usp=drive_link)

1. Descargá las fotos del Drive
2. Renombralas según la estructura de arriba
3. Ponelas en la carpeta `images/`
4. Para las portadas de discos, podés capturar las imágenes de Spotify o usar las que tengas

### Recomendaciones de imágenes
- **hero.jpg**: Foto en vivo o artística, horizontal, mínimo 1920px de ancho
- **bio.jpg**: Retrato vertical, mínimo 800px de ancho
- **Portadas**: Cuadradas, mínimo 500x500px
- **Fotos de prensa**: Cualquier orientación, mínimo 800px por lado
- Formato: JPG o WebP para mejor rendimiento

## Deploy en Vercel

### Opción 1: Desde GitHub

1. Creá un repo nuevo en GitHub (ej: `nico-lindblom-presskit`)
2. Subí todos los archivos:
   ```bash
   git init
   git add .
   git commit -m "Press kit inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/nico-lindblom-presskit.git
   git push -u origin main
   ```
3. Andá a [vercel.com](https://vercel.com) e importá el repo
4. Deploy automático, sin configuración extra necesaria

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Personalización

- **Colores**: Editá las variables CSS en `:root` en `styles.css`
- **Tipografías**: Se usan Inter (sans) y Playfair Display (serif) de Google Fonts
- **Fechas de shows**: Actualizá la sección "En Vivo" en `index.html`
- **Notas de prensa**: Agregá más cards en la sección "Prensa"

## Dominio personalizado

Desde el dashboard de Vercel podés conectar un dominio propio (ej: `nicolindblom.com`).

## Contacto

- nicolindblom@gmail.com
- Juana Bellone (Management): (221) 674 7138
