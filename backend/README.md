# Azure Function - Resume Counter

This project is a simple Azure Function that interacts with CosmosDB to maintain and update a counter. The counter is incremented every time the function is triggered via an HTTP request.
This is ideal for scenarios like tracking resume views or similar use cases.
---

## Project Overview

- **Function Name**: `GetResumeCounter`
- **Purpose**: Reads and increments a counter stored in CosmosDB.
- **Input**: HTTP GET or POST request.
- **Output**: JSON response with the updated counter value.
---

## Technologies Used

- **Azure Functions**: Serverless compute platform.
- **CosmosDB**: NoSQL database for storing the counter value.
- **C#**: Backend programming language.
- **Newtonsoft.Json**: For JSON serialization and deserialization.
- **Unit Testing**: Ensures the function performs as expected.
---

## How It Works

1. **HTTP Trigger**: The function is triggered by an HTTP GET or POST request.
2. **CosmosDB Binding**: Reads the counter from the `Counter` container in the `AzureResume` database.
3. **Increment Logic**: The counter value is incremented by 1.
4. **Response**: Returns the updated counter value as a JSON response.
---

## Unit Tests

Unit tests are implemented to ensure the function's reliability. Tests include:

- Validating the increment logic.
- Ensuring correct HTTP responses.
- Mocking CosmosDB interactions.
- Null Scope
- Counter test
---
