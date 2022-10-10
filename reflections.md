##

Lyckas inte instantiera servicen inuti controllern eller injicera in den när jag följer mönstret på hur Node_express sker.

Blandad logik som sker både i html och i programkod. Vad är bäst? Tycker inte att boken tar upp detta vilket vore bra i och med ramverk där sådana kombinationer är vanliga. Hur åstadkommer man Clean Code i ex. React, Angular eller Vue?
Bra med ramverkets hjälp med för IOC. Är inte beroende av implementationer utan abstraktioner. Speciellt bra för test

Service kapslar in transport av data mellan klasser samt gör det enkelt att injicera denna samt mocka bort den i test.

Publishers med hjälp av observables följer mönstret för subscribe/publish

Jag har en generell webbkomponent som hanterar när text skrivs in och skickar denna text vidare till dess parent-komponent. Jag skickar in de attribut via JSON som styr detta formulär från min parent-komponent och kan därför få textkomponenten att fungera lite olika beroende på vad jag skickar in för attbribut. T.ex. olika minsta-ländg på text samt dess felmeddelanden. Detta JSON-objekt kommer dessutom från en service (egentligen en vanlig klass) som injectas in i min parentkomponent. Servicens enda ansvar är att leverera dessa objekt Det går att abstrahera bort detta ännu mer och dessutom skicka in olika validatorer om jag vill det. När jag gör på detta sätt kommer formulären att fungera även om detta objekt är undefined. Formuläret skulle ju dock inte vara så användbart utan placeholders och validatorer men appen kraschar inte vilket gör att det känns som att jag åstadkommit en relativt lös koppling. Jag märker dock att ju mer jag abstraherar ut från min komponent desto mer svårbegriplig blir den. Här försöker jag hitta en avvägning då den används på endast två ställen. Skulle jag använda den mer kanske man får fundera över hur mycket den ska gå att styra "utifrån".

wrappar in min modul i en egen klass så att ändringar i modulen endast medför ändringar i klassen som wrappar den.

Följer kanske inte helt hur metoder ska placeras med getters, privata och publika metoder

Jag följer inte alltid mönstret med att förkorta metodsignaturen med tanke till argumentets typ, ex. borde addUser(user: User) kunna skrivas add(user: User) för att bli mer verbalt. Anledningen till detta är väl egentlig slarv i koden om jag ska vara ärlig.

public readonly userAdded$ = this.userSource.asObservable(); hjälper mig att slippa manipulation av publika attribut. Detta går även att förbättra om man dyker önnu djupare in i Rxjs. Ska jag vara helt ärlig vore det mycket bra om boken uppdaterades med Clean Code-exempel på hur detta kan skrivas med hjälp av reaktiv kodning i mycket vanliga ramverk som ex. Rxjs och RxJava.

Hade gjort en tankevurpa i min modul och lagt till en validator som kollar att användarid måste var ett nummer, här tänkte jag såklart kunna använda en textsträng i form av ett uuid så här fick jag ändra i själva modulen.

Skulle vilja veta mer hur man ska tänka kring att ha publika attribut i en klass än att ha en metod eller getter som bara refererar till ett privat attribut. Mats Loock pratade om "privacy leak" en gång när jag pratade med honon men har inte hittat något i kursboken om detta. Dock något jag skulle vilja veta mer om!
