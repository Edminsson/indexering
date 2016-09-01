# indexering
Indexeringsprojekt utan egen källkod. Innehåller endast externa beroende som jag kan använda för att göra gulp-tester.

Så här gjorde jag:
- Typescript är globalt installerat. Se till att köra "npm install typescript -g".
Installera INTE tsc globalt för då får du en mycket lägre version som inte funkar.
- tsd är globalt installerat
- tsc -p app vill ha en tsconfig.json
- Skapade tsconfig-fil. Kopierade från John Papa-repo.
- Kör "tsd install angular --save" som skapar en tsd.json
- Lägger till tsd.d.ts som pekar på den andra tsd.d.ts-filen i rotmapp.
- Skapar tslint-task i gulp. Drar in gulp-tslint.
- Installerar tslint globalt och skapar tslint.json med hjälp av tslint --init
- Ändrar i tslint.json för att inte få varning om jag använder enkelfnutt.
- Det ser ut som om gulp-tslint läser tslint.json som finns i samma mapp som gulpfile.js
