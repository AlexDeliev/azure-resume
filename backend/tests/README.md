# Tests for Azure Function - Resume Counter

This directory contains unit tests for the `GetResumeCounter` Azure Function.
The tests validate the functionality of the function, including its ability to read, increment, and return the counter stored in CosmosDB.

---

## Test Components

### 1. **`TestCounter`**
- **Purpose**: Verifies the main functionality of the `GetResumeCounter` function.
- **Key Test**: Ensures the counter is incremented correctly when the function is triggered.

### 2. **`TestFactory`**
- **Purpose**: Provides utility methods for creating test objects.
- **Features**:
  - Creates mock `HttpRequest` objects.
  - Generates different types of loggers for testing purposes.

### 3. **`ListLogger`**
- **Purpose**: Captures logs during test execution for validation.
- **Features**:
  - Stores log messages in an in-memory list.
  - Implements the `ILogger` interface.

### 4. **`NullScope`**
- **Purpose**: Provides a no-op implementation of the `IDisposable` interface for logger scopes.

---

## File Structure

```plaintext
tests/
├── TestCounter.cs    # Main test class for the Azure Function
├── TestFactory.cs    # Factory methods for creating mock objects
├── ListLogger.cs     # Custom logger for capturing logs
├── NullScope.cs      # No-op implementation of IDisposable for logger scopes
```
## How to Run Tests

### Prerequisites
- **.NET SDK**: Ensure you have the .NET SDK installed.
- **xUnit**: The tests are written using the xUnit testing framework.

### Running the Tests
1. Navigate to the project directory.
2. Execute the following command to run all tests:
   ```bash
   dotnet test
