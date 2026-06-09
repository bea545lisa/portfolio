# portfolio.bealisa.com

Persönliche Portfolio-Seite.

**Live:** [portfolio.bealisa.com](https://portfolio.bealisa.com)

## Stack

- Vue 3 + Vue Router
- Vite 8
- Tailwind CSS v4

## Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf Port 5175
npm run build      # Production Build → dist/
npm run preview    # Production Build lokal testen
```

## Deployment

Push auf `main` → GitHub Action baut automatisch und deployt per FTPS auf den Host.

Bilder liegen in `public/images/` (nicht im Git) und müssen manuell per FTP hochgeladen werden.