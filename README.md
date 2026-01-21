# 🚀 Next.js Fullstack Starter Template

Plantilla profesional para iniciar proyectos **full‑stack modernos** con un stack real de producción, pensada para ahorrar tiempo y seguir buenas prácticas desde el día 1.

---

## ✨ Características

* ⚡ **Next.js (App Router)**
* 🟦 **TypeScript**
* 🎨 **Tailwind CSS** + `clsx` + `tailwind-merge`
* 🧪 **Vitest** (unit tests)
* 🎭 **Playwright** (E2E tests)
* 🧹 **ESLint + Prettier** integrados
* 📦 **pnpm** como gestor de paquetes
* 🔧 Configuración lista para escalar

---

## 📁 Estructura del proyecto

```txt
my-app/
├─ src/
│  ├─ app/                # App Router (Next.js)
│  ├─ lib/                # Utilidades compartidas
│  └─ components/         # Componentes reutilizables
│
├─ tests/                 # Tests unitarios (Vitest)
├─ playwright-tests/      # Tests end‑to‑end (Playwright)
│
├─ vitest.config.ts
├─ vitest.setup.ts
├─ playwright.config.ts
├─ tailwind.config.ts
├─ tsconfig.json
├─ .eslintrc.json
├─ .prettierrc
└─ package.json
```

---

## 🧪 Testing

### Unit tests (Vitest)

```bash
pnpm vitest
```

Modo watch:

```bash
pnpm vitest --watch
```

---

### End‑to‑End tests (Playwright)

Ejecutar todos los tests:

```bash
pnpm exec playwright test
```

Modo UI:

```bash
pnpm exec playwright test --ui
```

---

## 🧹 Lint & Format

### ESLint

```bash
pnpm lint
```

### Prettier

Comprobar formato:

```bash
pnpm exec prettier --check .
```

Arreglar automáticamente:

```bash
pnpm exec prettier --write .
```

---

## ▶️ Desarrollo

```bash
pnpm dev
```

Abrir en el navegador:

```
http://localhost:3000
```

---

## 🧱 Filosofía del proyecto

Este template está pensado para:

* Proyectos reales (no solo demos)
* Escalar sin rehacer configuración
* Mantener código consistente
* Facilitar testing desde el inicio

Si tu proyecto no necesita tests o linting, puedes desactivarlos, pero **la base ya está lista**.

---

## 📌 Recomendaciones

* Usa este repositorio como **Template** en GitHub
* Mantén dependencias actualizadas conscientemente
* Escribe tests desde el inicio

---

## 📄 Licencia

MIT

---

Hecho para desarrollo moderno
