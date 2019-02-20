# Name Angular Tests

Instruktioner för konfigurering av tester.
Se även https://angular.io/guide/testing.

### Testbed: Angular dependency injection 

Skapar en dynamiskt konstruerad testmodul som eumulerar Angular @NgModule.

TestBed.configureTestingModule(metadataobjekt), konfigurererar testet.

För att testa en service,lägg till den i "providers" arrayen.
    TestBed.configureTestingModule({ providers: [ValueService] });

För att testa en komponent, lägg till den i "declarations" arrayen.

## Gruppera tester med describe(beskrivning: string)

För att gruppera tester med samma inställningar. 
Kan även innehålla nestade samlingar.

### beforeEach()

Körs före varje test.
Här placeras konfigureringen av TestBed.

### createComponent() 

Skapar instansen av komponenten, därefter kan ingen utterligare kongigurering av komponenten göras. 
Binder INTE data.

### detectChanges()

Utför data-binding. 
Efter denna sker Angulars "lifecycle hooks".

## Mocking
För att enbart testa komponenten, bör man fejka dependencies "stubs, fakes, spies or mocks).
En stubb är enklast.

    let userServiceStub: Partial<UserService>;

    userServiceStub = {
    isLoggedIn: true,
    user: { name: 'Test User'}
    };

En spy erbjuder mer funktioner, som "fakeAsync"

## HttpClientTestingModuke

Används för att fajka http anrop.