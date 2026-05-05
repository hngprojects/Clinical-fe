# CLINSIGHTS — clinical support tool (Next.js)

> **Project:** CLINSIGHTS — is a Nigeria-first digital health platform that helps patients understand their laboratory results instantly using AI — with the option to request an affordable second opinion from verified doctors.

The aim is to provide instant, easy-to-understand interpretations of lab results with optional access to a verified doctor for a second opinion.

---

## Stack

- **Next.js 16** App Router (`proxy.ts`, `forbidden.tsx`, `unauthorized.tsx`)
- **React 19**, **TypeScript** (strict)
- **Tailwind v4** with shadcn `radix-maia` style
- **Linting & Formatting:** ESLint + Prettier
- **Git hooks:** Husky (pre-commit for linting & formatting)
- **`@t3-oss/env-nextjs`** + **Zod 4** for build-time env validation

---

## Scripts

| Command          | What it does                     |
| ---------------- | -------------------------------- |
| `pnpm dev`       | Dev server                       |
| `pnpm build`     | Production build (validates env) |
| `pnpm start`     | Run the production build         |
| `pnpm lint`      | ESLint                           |
| `pnpm typecheck` | `tsc --noEmit`                   |

---

## 🚀 Local Setup (Next.js)

1. **Clone the repository**

```bash
git clone https://github.com/hngprojects/content-creator-todo-fe
cd content-creator-todo-fe
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Run the dev server**

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

### Branch Naming Convention

All branches should follow a clear naming pattern based on the type of work:

| Type         | Format                   | Example                                          |
| ------------ | ------------------------ | ------------------------------------------------ |
| **Feature**  | `feat/feature-name`      | `feat/hero-ui`, `feat/dashboard-chart`           |
| **Bug Fix**  | `fix/bug-name`           | `fix/login-validation`, `fix/theme-switcher`     |
| **Chore**    | `chore/chore-name`       | `chore/update-dependencies`, `chore/setup-husky` |
| **Docs**     | `docs/doc-name`          | `docs/api-documentation`                         |
| **Test**     | `test/test-name`         | `test/unit-tests-auth`                           |
| **Refactor** | `refactor/refactor-name` | `refactor/component-structure`                   |

**Guidelines:**

- Use lowercase letters only
- Use hyphens to separate words (no underscores or spaces)
- Keep branch names concise but descriptive
- Delete branches after merging into `main`

### Commit Message Convention

We follow the **Conventional Commits** specification for clear, structured commit messages. This helps with version tracking, changelog generation, and code review.

#### Commit Types

| Type         | Purpose                                           | Example                                              |
| ------------ | ------------------------------------------------- | ---------------------------------------------------- |
| **feat**     | A new feature                                     | `feat(auth): add login with Google`                  |
| **fix**      | A bug fix                                         | `fix(form): resolve validation error on submit`      |
| **docs**     | Documentation changes                             | `docs(readme): update setup instructions`            |
| **style**    | Code style changes (formatting, semicolons, etc.) | `style: add missing semicolons`                      |
| **refactor** | Code refactoring without feature changes          | `refactor(components): extract Hero component logic` |
| **perf**     | Performance improvements                          | `perf(bundle): reduce bundle size by 15%`            |
| **test**     | Adding or updating tests                          | `test(auth): add login unit tests`                   |
| **chore**    | Dependency updates, tooling, etc.                 | `chore(deps): update Next.js to v14`                 |
| **ci**       | CI/CD configuration changes                       | `ci: add GitHub Actions workflow`                    |

#### Example Commits

**Good ✅**

```

feat(hero): implement hero section with animations

```

```

fix(nav): resolve mobile menu not closing on link click

```

**Bad ❌**

```

fixed stuff
updated code
work in progress
made changes

```

#### Subject Line Guidelines

- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize the first letter
- Don't end with a period
- Limit to 50 characters
- Start with the commit type

#### Footer Guidelines

- Reference related issues: `Closes #42`, `Fixes #15`
- Add breaking changes: `BREAKING CHANGE: description`

### Pull Request Process

1. **Create a feature branch** following the naming convention

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Commit your changes** with descriptive conventional commit messages

   ```bash
   git add .
   git commit -m "feat(component): add new component with props"
   ```

3. **Push to your branch**

   ```bash
   git push origin feat/your-feature-name
   ```

4. **Open a Pull Request** with:
   - Clear description of what changed and why
   - Reference to related issues
   - Screenshots or GIFs if UI changes
   - Mention any breaking changes

5. **Code Review**
   - Address review feedback
   - Keep commits clean and organized
   - Ensure all CI checks pass

6. **Merge** - Use "Squash and merge" for feature branches to keep history clean

### Code Quality Standards

- **Linting:** All code must pass ESLint checks (`pnpm lint`)
- **Formatting:** Code must be formatted with Prettier (`pnpm format`)
- **TypeScript:** Use TypeScript for new components and features
- **Testing:** Add unit tests for new features (when applicable)
- **Accessibility:** Follow WCAG guidelines for UI components
- **Performance:** Minimize bundle size and optimize images

---

### Getting Help

- Check existing issues and PRs before creating a new one
- Ask questions in pull request comments
