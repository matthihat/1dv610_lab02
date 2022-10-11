# Reflektion

## Kapitel 2

**Class names** - Klasser ska vara substantiv är något som jag använt mig av för att se till att mina klasser kan instanseras till användbara objekt. **Method names** Metodnamnen är i enlighet med boken verb som beskriver en handling. Gärna korta metodnamn. I de fall jag kunnat har jag även använd get/set och is. Ibland har jag även använt t.ex. "shouldDisableClearButton" vilket säkert kan ersättas med "is..." och jag skulle gärna se att någon annan kom med sådana förslag i min kod då jag inte kommer på något riktigt bra själv:
![2](bilder/kap2.png)

## Kap 3

**Small!** och **Do one thing** är något som jag försöker att använda så mycket jag kan. Det kan nästan kännas "fjantigt" ibland men koden blir ju också mer lätt-testad om den bara göra en sak och är liten. Jag försöker också att följa **Function Arguments** så mycket jag kan genom att se till att funktioner har som mest ett argument (_monadic_) eller helst inga alls (_niladic_). Här ser jag att funktionen "constructUser" kanske är på en annan abstraktionsnivå än de andra funktionerna som snarare hanterar olika "events" som förekommer, t.ex. borttag av uppgift, tillkomst av en uppgift eller en användare o.s.v. Detta hade kunnats delats in i en annan eller ny klass för att undvika att klassen tappar _cohesion_ enligt kapitel 10 **Maintaining cohesion Results in Many Small Classes**
![3](bilder/kap3.png)

## Kapitel 4

## Kapitel 10

**Single Responsibility Principle** använder jag för att se till att en klass bara ska göra en sak. Jag tycker att detta i praktiken kan svårt att åstadkomma. Jag försöker då ta hjälp av det som också nämns under **Classes should be small!**, går klasserna att minska ner kommer de fömodligen också att endast göra en sak. Bilden nedan är exempel från min kod utifrån detta då jag tänker att klassen "TasksService" enda ansvarsområde är att hantera tasks men även att kommunicera ut när något förändras (vilket iof skulle kunna vara en egen klass också):
![SRP](bilder/srp.png)

Bra med ramverkets hjälp med för IOC. Är inte beroende av implementationer utan abstraktioner. Speciellt bra för testning.

Service kapslar in transport av data mellan klasser samt gör det enkelt att injicera denna samt mocka bort den i test.

Publishers med hjälp av observables följer mönstret för subscribe/publish

Jag har en generell webbkomponent som hanterar när text skrivs in och skickar denna text vidare till dess parent-komponent. Jag skickar in de attribut via JSON som styr detta formulär från min parent-komponent och kan därför få textkomponenten att fungera lite olika beroende på vad jag skickar in för attbribut. T.ex. olika minsta-ländg på text samt dess felmeddelanden. Detta JSON-objekt kommer dessutom från en service (egentligen en vanlig klass) som injectas in i min parentkomponent. Servicens enda ansvar är att leverera dessa objekt Det går att abstrahera bort detta ännu mer och dessutom skicka in olika validatorer om jag vill det. När jag gör på detta sätt kommer formulären att fungera även om detta objekt är undefined. Formuläret skulle ju dock inte vara så användbart utan placeholders och validatorer men appen kraschar inte vilket gör att det känns som att jag åstadkommit en relativt lös koppling. Jag märker dock att ju mer jag abstraherar ut från min komponent desto mer svårbegriplig blir den. Här försöker jag hitta en avvägning då den används på endast två ställen. Skulle jag använda den mer kanske man får fundera över hur mycket den ska gå att styra "utifrån".

wrappar in min modul i en egen klass så att ändringar i modulen endast medför ändringar i klassen som wrappar den.

Följer kanske inte helt hur metoder ska placeras med getters, privata och publika metoder

Jag följer inte alltid mönstret med att förkorta metodsignaturen med tanke till argumentets typ, ex. borde addUser(user: User) kunna skrivas add(user: User) för att bli mer verbalt. Anledningen till detta är väl egentlig slarv i koden om jag ska vara ärlig.

public readonly userAdded$ = this.userSource.asObservable(); hjälper mig att slippa manipulation av publika attribut. Detta går även att förbättra om man dyker önnu djupare in i Rxjs. Ska jag vara helt ärlig vore det mycket bra om boken uppdaterades med Clean Code-exempel på hur detta kan skrivas med hjälp av reaktiv kodning i mycket vanliga ramverk som ex. Rxjs och RxJava.

Hade gjort en tankevurpa i min modul och lagt till en validator som kollar att användarid måste var ett nummer, här tänkte jag såklart kunna använda en textsträng i form av ett uuid så här fick jag ändra i själva modulen.

Skulle vilja veta mer hur man ska tänka kring att ha publika attribut i en klass än att ha en metod eller getter som bara refererar till ett privat attribut. Mats Loock pratade om "privacy leak" en gång när jag pratade med honon men har inte hittat något i kursboken om detta. Dock något jag skulle vilja veta mer om!

Blandad logik som sker både i html och i programkod. Vad är bäst? Tycker inte att boken tar upp detta vilket vore bra i och med ramverk där sådana kombinationer är vanliga. Hur åstadkommer man Clean Code i ex. React, Angular eller Vue?
