# Middle-earth Explorer

## Beskrivning

Middle-earth Explorer är en webbapplikation byggd med Vue.js där användaren kan utforska olika platser i Midgård från Sagan om ringen.

Användaren kan se information om olika platser, lägga till nya platser och ta bort befintliga platser. Applikationen hämtar och hanterar information genom ett REST API.

## Funktioner

- Visa olika platser i Midgård.
- Lägga till nya platser med hjälp av ett formulär.
- Ta bort befintliga platser.
- Visa information om varje plats, såsom namn, rike, befolkning och säkerhet.
- Responsiv design som fungerar på dator, surfplatta och mobil.
- Navigera mellan olika sidor med Vue Router.

## Tekniker

- Vue.js 3
- JavaScript
- HTML
- CSS
- Vue Router
- REST API
- Fetch API
- Vite

## API

Applikationen använder ett REST API för att hämta, lägga till och ta bort information om platser i Midgård.

API-adress: https://middle-earth-explorer-api.onrender.com/places

Följande HTTP-metoder används:

- GET – hämtar alla platser.
- POST – lägger till en ny plats.
- DELETE – tar bort en befintlig plats.

## Installation

Följ stegen nedan för att köra projektet lokalt:

1. Klona projektet från GitHub:

   ```bash
   git clone https://github.com/aliatwood/Fullstack-uppgift3.git
   ```

2. Gå till projektmappen:

   ```bash
   cd Fullstack-uppgift3
   ```

3. Installera projektets beroenden:

   ```bash
   npm install
   ```

4. Starta utvecklingsservern:

   ```bash
   npm run dev
   ```

## Publicerad webbplats

Den publicerade applikationen finns här:

https://aliatwood.github.io/Fullstack-uppgift3/#/