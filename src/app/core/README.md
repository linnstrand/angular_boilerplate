# Content for Core Module:

For collecting numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.
Importing CoreModule into the root AppModule reduces its complexity and emphasizes its role as orchestrator of the application as a whole.

Place application wide SINGLETON SERVICES in Core Module.
Import all modules required by the assets in the CoreModule (e.g. CommonModule and FormsModule).
// Gather application-wide, SINGLE USE COMPONENTS in the CoreModule. Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent).
Export all symbols from the CoreModule that the AppModule will import and make available for other feature modules to use.

## Do NOT

DO NOT import the CoreModule anywhere except in the AppModule.