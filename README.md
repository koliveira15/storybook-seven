# Storybook 7 & Cypress Parallel

Example repo demonstrating running Storybook and Cypress E2E in parallel

## Setup

```bash
npm ci
```

## Commands 

```bash
npx nx run-many --target e2e --configuration ci
```

or make a code change and run: 

```bash
npx nx affected --target e2e --configuration ci
```

## Relevant Configurations

### Feature Lib

```json
"static-storybook": {
  "executor": "@nrwl/web:file-server",
  "options": {
    "buildTarget": "feature-one:build-storybook",
    "staticFilePath": "dist/storybook/feature-one"
  },
  "configurations": {
    "ci": {
      "buildTarget": "feature-one:build-storybook:ci",
      "port": 0 <---- FINDS AND OPEN PORT
    }
  }
}
```

### Feature Lib E2E

```json
"e2e": {
  "executor": "@nrwl/cypress:cypress",
  "options": {
    "cypressConfig": "apps/feature-one-e2e/cypress.config.ts",
    "devServerTarget": "feature-one:storybook",
    "testingType": "e2e"
  },
  "configurations": {
    "ci": {
      "devServerTarget": "feature-one:static-storybook:ci", <---- POINTS TO STATIC-STORYBOOK TARGET
      "port": "cypress-auto" <---- FINDS AND OPEN PORT
    }
  }
}
```
