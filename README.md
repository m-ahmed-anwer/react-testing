
# React Testing with GitHub Actions

Welcome to the React Testing with GitHub Actions repository! This project serves as a hands-on learning experience for anyone looking to master testing in React applications and automating test workflows using GitHub Actions.


## 🚀 Project Overview

This repository contains a simple Create React App setup, integrated with various testing frameworks and libraries. The primary goal is to implement and automate testing processes, ensuring code quality and reliability in React applications.
## 🧪 Key Features

- **Comprehensive Testing**: Learn how to write unit and integration tests for your React components using Jest and React Testing Library.
- **Docker Integration**: Utilize Docker to create a consistent testing environment, allowing you to run tests in isolated containers.
- **Continuous Integration**: Set up GitHub Actions to automatically run tests on every push and pull request, ensuring that your codebase remains stable and bug-free.


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


## 📚 Learn More

Explore the following resources to deepen your understanding of React testing and GitHub Actions:

- [React Testing Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Documentation](https://docs.docker.com/)