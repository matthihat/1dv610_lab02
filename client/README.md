# För app-användare

Denna app kan användas till att slumpmässigt dela ut uppgifter till ett visst antal användare.

Du kan mata in flera användares namn och flera olika "att-göra-uppgifter". När både användare och uppgifter finns tillgängliga går det att slumpmässigt tilldela alla uppgifter till någon av användare. Uppgifterna tilldelas in "rättvist" på det viset att vissa användare inte får några uppgifter medan andra får flera. Användbart vid t.ex. en daily standup för att dela ut uppgifter som ingen vill göra!

Om du vill starta en ny tilldelning så är det bara att ladda om sidan eller att rensa någon av befintliga användare eller uppgifter.

# För utvecklare (och examinator)

Denna app är en ren webbapplikation som behöver en server för att köras på.
Nedan beskriver jag de steg som krävs för att starta och bygga appen.

## Beroenden

För att kunna köra verktyget krävs först att du installerar NodeJS, se [NodeJS](https://nodejs.org/en/). Detta projekt tar också hjälp av command-line-verktyget [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3 för att starta och bygga projektet. Du hittar information om hur du installerar det [här](https://angular.io/guide/setup-local) Efter att du installerat NodeJS behöver du alltså installera Angular CLI.

I _filen package.json_ finns de paket som applikationen är berorende av. Slutligen måste du alltså installera dessa med hjälp av Node genom att köra kommandot `npm install`

Du behöver också ha importerat allt under katalogen `module` då det där finns ett beroende som inte hanteras via filem _package.json_. Denna modul kommer ursprungligen från [Gitlab](https://github.com/matthihat/randomify).

När du gjort ovanstående steg kan du starta appen.

## Starta utvecklingmiljö

Kör `ng serve` for att starta appen med hjälp av en utvecklingsserver. Navigera till `http://localhost:4200/`. Applikationen kommer automatiskt att laddas om ifall du ändrar något i källkodsfilerna.

## Bygg

Kör `ng build` för att bygga projektet. Artefakterna från bygget sparas då under den genererade katalogen `dist/`.

## Version

1.0

## Feedback

Kan ske genom att göra nya issues eller pull-requests mot projektet på [Github](https://github.com/matthihat/1dv610_lab02)
