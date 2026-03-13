# Express + Better Auth + Dizzle Starter Kit

🚀 A starter kit for building modern web applications API with **Express 5**, **Better Auth**, **Dizzle**.

## 📌 Features

- ✅ **Express 5**
- ✅ **Better Auth** for authentication
- ✅ **Dizzle** for database management
- ✅ TypeScript support

## 📦 Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mohbadreldeen/express-starter-better-auth-drizzle-pg.git
    cd express-starter-better-auth-drizzle-pg
    ```
2. Install dependencies:
    ```sh
    pnpm install
    ```
3. Set up environment variables:

    ```sh
    cp .env.example .env
    ```

    The defaults use project-specific Postgres credentials and port `5433` so they do not clash with another local database.

4. Start Docker for the Postgres image:

    ```sh
    docker compose up -d
    ```

5. Set up the database:

    ```sh
    pnpm dlx @better-auth/cli@latest generate
    ```

6. Start the development server:
    ```sh
    pnpm dev
    ```

## 🚀 Usage

- Run `pnpm dev` to start the development server.
- Use `pnpx db:studio` to manage your database visually.
- Customize authentication using Better Auth settings.

## 🛠️ Tech Stack

- **Express 5** - React framework
- **Better Auth** - Authentication
- **Dizzle** - Database ORM (v7)
- **TypeScript** - Type safety
- **Postgress** - DBMS

---

Made with ❤️ by [Mohamed Badreldeen](https://github.com/mohbadreldeen)
