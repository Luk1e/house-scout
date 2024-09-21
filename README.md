# **HouseScout License**

**Project Title:** HouseScout

**Author:** Luka Gogiashvili

---

## License

This project is licensed under the HouseScout license. All rights reserved.

---

## How to Start the Project

### Frontend

To start the frontend, ensure you have Node and npm installed. Then, follow these steps:

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend

   ```

2. **Install the dependencies**:

   ```bash
   npm install

   ```

3. **Run the Vite React server**:
   ```bash
   npm run dev
   ```

## Project Overview

**Project Name:** House Scout <br>
**GitHub Repository:** [https://github.com/Luk1e/house-scout](https://github.com/Luk1e/house-scout) <br>
**Hosted Version:** [https://house-scout.onrender.com/](https://house-scout.onrender.com/)

House Scout is a web application for real estate listings and management. It provides features for browsing, filtering, and adding property listings.

## Technologies Used

- React
- Vite
- TypeScript
- Redux Toolkit
- Tailwind CSS

## Key Features

### Home Page Filter

The home page includes a filter functionality that returns data if it satisfies at least one filter criterion, not necessarily all criteria. This approach allows for more flexible and inclusive search results.

### Add Listing Page

On the add-listing page, form data is stored in localStorage. This feature ensures that user input is preserved even if the page is refreshed, providing a seamless user experience and preventing data loss.

## Project Structure

The project follows a structured layout:

```
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
│   ├── add-agent/
│   ├── delete-estate/
│   ├── estate-card/
│   ├── header/
│   ├── loader/
│   ├── select/
│   └── index.ts
├── layouts/
│   ├── index.ts
│   └── PublicLayout.tsx
├── pages/
│   ├── add-listing/
│   ├── home/
│   ├── listing/
│   └── index.ts
├── routes/
│   ├── publicRoutes.tsx
│   └── routes.ts
├── store/
│   ├── rootReducer.ts
│   └── store.ts
├── toolkit/
├── utils/
│   ├── helpers/
│   └── hooks/
```

This structure organizes the codebase into logical sections, separating concerns and improving maintainability.

## Contact Information

For any inquiries or contributions, please contact:

Luka Gogiashvili
Email: luka.gogiashvili.02@gmail.com
