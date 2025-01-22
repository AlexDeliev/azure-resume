# Azure Resume Project

Welcome to the **Azure Resume Project**! This project showcases a personal resume webpage integrated with modern cloud technologies, designed to be hosted on Microsoft Azure. It features both a responsive frontend and a serverless backend, leveraging continuous integration and deployment with GitHub Actions.

---

## Features

### Frontend
- **Responsive Design**: Adaptable to different screen sizes for optimal user experience.
- **Interactive Elements**: Hover effects, smooth scrolling, and animations for a modern touch.
- **Visitor Counter**: Tracks the number of visits to the resume page in real-time.

### Backend
- **Serverless Architecture**: Utilizes Azure Functions for efficient and scalable backend operations.
- **Database Integration**: Connects to Azure CosmosDB to store and manage the visitor counter.

### CI/CD Workflow
- **GitHub Actions**: Automates the deployment of both the frontend and backend to Azure.
- **Streamlined Updates**: Push changes to GitHub to trigger automatic deployment.

### Cloud Development
- **Scalable Infrastructure**: Leverages Azure services for a reliable and scalable deployment.
- **Global Availability**: Hosted on Azure, ensuring fast and consistent access worldwide.
- **Cost-Effective**: Pay-as-you-go pricing model for efficient resource usage.

---

## Technology Stack

### Frontend
- **HTML5**: Semantic and accessible markup.
- **CSS3**: Styling and layout with responsive design principles.
- **JavaScript**: Interactive features and API integrations.

### Backend
- **Azure Functions**: Serverless compute platform for executing backend logic.
- **CosmosDB**: NoSQL database for storing visitor counter data.
- **C#**: Backend programming language for Azure Functions.

### DevOps
- **GitHub Actions**: CI/CD workflows for seamless deployment.
- **Azure Blob Storage**: Hosts the static frontend files.

---

## Project Structure

```plaintext
azure-resume/
├── frontend/            # HTML, CSS, and JavaScript files for the resume webpage
├── backend/             # Azure Function code for the visitor counter
├── .github/workflows/   # GitHub Actions workflows for CI/CD
├── azure-resume.sln     # Solution file for the project
├── LICENSE              # License for the project
├── README.md            # Primary project documentation
```

---

## How It Works

### Frontend
1. **Static Hosting**: The resume webpage is hosted on Azure Blob Storage.
2. **Visitor Counter**: JavaScript makes API calls to the backend to fetch and update the visitor count.

### Backend
1. **Azure Function**: HTTP-triggered function reads and increments the visitor counter.
2. **CosmosDB**: Stores the visitor count in a container.

### CI/CD Workflow
1. **Frontend Deployment**: Pushes updates to Azure Blob Storage.
2. **Backend Deployment**: Deploys Azure Functions using GitHub Actions.

---

## Testing

### Frontend
- Test responsiveness and interactivity in various browsers.

### Backend
- Unit tests using xUnit to validate:
  - Counter increment logic
  - HTTP response correctness
  - CosmosDB interactions

### CI/CD
- Verify successful deployments through GitHub Actions logs.

---

## What's Next?

This project is just the beginning! Expand its capabilities by:
- Advanced Frontend Features: Introduce new animations, interactive components, or dynamic content.
- Extended Azure Integrations: Experiment with other Azure services like Cognitive Services or Azure Functions for advanced functionality.
- New Skills: Of Course.

## License

This project is licensed under the [MIT License](./LICENSE).

