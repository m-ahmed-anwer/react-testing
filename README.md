# 🚀 React Testing Playground: Mastering Automation with GitHub Actions and AWS

Welcome to the **React Testing Playground**! This repository is designed as an immersive learning experience for developers eager to master testing in React applications and automate their workflows using **GitHub Actions** and **AWS**.

## 🌟 Project Overview

Dive into this repository, which showcases a streamlined **Create React App** setup integrated with various testing frameworks and libraries. My primary objective is to implement and automate testing processes that guarantee code quality and reliability in React applications while leveraging AWS for deployment and scalability.

## 🧪 Key Features

- **Comprehensive Testing**: Learn how to write unit and integration tests for your React components using Jest and React Testing Library.
- **Docker Integration**: Utilize Docker to create a consistent testing environment, allowing you to run tests in isolated containers.
- **Continuous Integration**: Set up GitHub Actions to automatically run tests on every push and pull request, ensuring that your codebase remains stable and bug-free.
- **AWS Amplify Deployment**: Easily deploy your application with AWS Amplify, providing a simple way to host and manage your React application.



## 📦 Getting Started

To get started with this project, clone the repository and install the necessary dependencies:

```bash
  git clone https://github.com/m-ahmed-anwer/react-testing
  cd react-testing
  npm install
```

**Running Tests Locally**

You can run tests locally using the following command:
```bash
npm test
```

**Running Tests with Docker**

To run tests in a Docker container, use the following command:
```bash
docker build . -t react-app
docker run --rm react-app
```
## 🔗 GitHub Actions

This project is equipped with a GitHub Actions workflow that automatically builds the Docker container and runs tests whenever changes are pushed to the `main` branch or a pull request is created. Check the `.github/workflows/ci.yml` file for configuration details.

## 🌐 AWS Amplify Deployment

The application is deployed using AWS Amplify, enabling continuous deployment and hosting for your React application. The deployment is automatically triggered whenever changes are pushed to the repository.

## 📚 Learn More

Explore the following resources to deepen your understanding of React testing and GitHub Actions:

- [React Testing Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
