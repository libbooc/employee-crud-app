# Employee Management CRUD Web App/System

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app): A simple Employee Management System built also with __TypeScript, Prisma, Sqlite3, Tailwind CSS (daisy-ui), and Jest__ for unit testing.

## How to Setup

Follow these steps to set up and run the Employee Management System on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/libbooc/employee-crud-app.git
cd employee-crud-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database (Environment Configuration)
Create a file named .env in the root directory and add your database URL. For temporary use:
```bash
DATABASE_URL="file:./prisma/dev.db"
```

4. Run the migrations:
```bash
npx prisma migrate dev
```

5. To run the prisma studio:
```bash
npx prisma studio
```

6. Start the development server:
```bash
npm run dev
```

The application should now be running at http://localhost:3000.

## Following libraries that were used
* __NEXTJS__: The React framework used for building the web application.
* __TypeScript__: A superset of JavaScript that adds static typing to the language.
* __Prisma__: A database toolkit for Node.js and TypeScript that integrates with various databases.
* __Sqlite3__: A self-contained, serverless, and zero-configuration database engine.
* __daisy-ui__: (Tailwind CSS): A UI library used for styling components.
* __Jest__ (for unit testing)

## Additional Important Notes

### Main Page
The main page is located in `app/page.tsx`. It includes components for adding employees (AddEmployee) and displaying the employee list (EmployeeList).

### Prisma Configuration
The Prisma configuration is defined in the `lib/prisma.ts` file. It exports a Prisma client instance (prisma) and ensures that the client is a singleton to optimize performance.

### Environment Variables
The database URL is specified in the `.env` file. Make sure to update this file if you change the database configuration.

### Tests
Test files are located in the `app/tests` folder. To run tests:
```bash
npm run test
```

#### Feel free to explore and enhance the application further. Thank you!
