# Component Library

A lightweight, reusable React component library built with TypeScript and styled with Tailwind CSS. This library provides 5 production-ready components for building modern UI interfaces.

## Components

### 1. **Button**

A customizable button component with multiple variants and sizes.

**Props:**

- `variant`: `'primary'` | `'secondary'` | `'danger'` (default: `'primary'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- All standard HTML button attributes

**Example:**

```tsx
import { Button } from "./components";

<Button variant="primary" size="md" onClick={() => alert("Clicked!")}>
  Click Me
</Button>;
```

---

### 2. **Card**

A container component with optional sub-components for structured content.

**Components:**

- `Card` - Main container
- `CardHeader` - Header section with border
- `CardBody` - Main content area
- `CardFooter` - Footer section with action buttons

**Props:**

- `children`: React content
- `onClick`: Optional click handler
- `className`: Additional Tailwind classes

**Example:**

```tsx
import { Card, CardHeader, CardBody, CardFooter } from "./components";

<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content goes here</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

---

### 3. **Modal**

A modal dialog component with backdrop overlay and close functionality.

**Props:**

- `isOpen`: `boolean` - Controls visibility
- `onClose`: `() => void` - Close handler
- `title`: `string` - Modal title
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `children`: React content

**Example:**

```tsx
import { Modal } from "./components";
import { useState } from "react";

const [open, setOpen] = useState(false);

<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure?</p>
</Modal>;
```

---

### 4. **Input**

A form input component with label, error handling, and helper text.

**Props:**

- `label`: `string` - Input label
- `error`: `string` - Error message (shows in red)
- `helperText`: `string` - Helper text below input
- `required`: `boolean` - Marks field as required
- All standard HTML input attributes

**Example:**

```tsx
import { Input } from "./components";

<Input
  type="email"
  label="Email Address"
  placeholder="user@example.com"
  error={emailError}
  helperText="We'll never share your email"
  required
/>;
```

---

### 5. **Alert**

A dismissible alert component for notifications and messages.

**Props:**

- `variant`: `'info'` | `'success'` | `'warning'` | `'danger'` (default: `'info'`)
- `title`: `string` - Alert title
- `onClose`: `() => void` - Close handler
- `children`: Alert message content
- `className`: Additional Tailwind classes

**Example:**

```tsx
import { Alert } from "./components";
import { useState } from "react";

const [visible, setVisible] = useState(true);

<Alert variant="success" title="Success" onClose={() => setVisible(false)}>
  Your changes have been saved successfully!
</Alert>;
```

---

## Installation

```bash
npm install
```

## Development

Watch for changes and recompile TypeScript:

```bash
npm run dev
```

## Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

Output files are generated in the `dist/` directory.

## Project Structure

```
src/
├── Button.tsx       # Button component
├── Card.tsx         # Card components (Card, CardHeader, CardBody, CardFooter)
├── Modal.tsx        # Modal component
├── Input.tsx        # Input component
├── Alert.tsx        # Alert component
└── index.ts         # Main export file
```

## Technologies

- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **PostCSS**: CSS processing

## Features

✅ Fully typed with TypeScript
✅ Responsive design with Tailwind CSS
✅ Customizable variants and sizes
✅ Accessible components
✅ Production-ready
✅ Lightweight and tree-shakeable

## License

MIT
