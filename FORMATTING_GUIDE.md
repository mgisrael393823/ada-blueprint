# React Component Formatting Guide

This guide provides rules to prevent common React formatting issues that can lead to errors.

## Component Structure Guidelines

1. **Proper Element Nesting**: Always ensure that HTML/JSX elements are properly nested.

```jsx
// ❌ BAD - Improper nesting
<div>
  <section>
    <h2>Title</h2>
  <div className="content">
    <p>Content goes here</p>
  </div>
</section>
</div>

// ✅ GOOD - Proper nesting
<div>
  <section>
    <h2>Title</h2>
    <div className="content">
      <p>Content goes here</p>
    </div>
  </section>
</div>
```

2. **Consistent Indentation**: Use 2 spaces for indentation. Each nested element should be indented properly.

```jsx
// ❌ BAD - Inconsistent indentation
<div>
<p>
  This is poorly indented
    </p>
      </div>

// ✅ GOOD - Consistent indentation
<div>
  <p>
    This is properly indented
  </p>
</div>
```

3. **Component Organization**: Keep components well-organized with clear sections.

```jsx
// ✅ GOOD - Well-organized component
export default function MyComponent() {
  // State, hooks, side effects
  const [state, setState] = useState();
  
  // Event handlers and other functions
  const handleClick = () => {
    // ...
  };
  
  // JSX structure with proper nesting and indentation
  return (
    <div className="container">
      <section className="content">
        <h1>Title</h1>
        <p>Content</p>
      </section>
    </div>
  );
}
```

## Common Errors to Avoid

1. **Unclosed Tags**: Always close all tags properly.
2. **Mismatched Opening/Closing Tags**: Ensure that each opening tag has a matching closing tag.
3. **Improper Hierarchy**: Maintain proper parent-child relationships.
4. **Missing React Imports**: Include necessary imports for all React components and hooks.
5. **Fragment Issues**: When using React Fragments, ensure proper nesting.

## ESLint Integration

We have ESLint rules configured to catch these issues. Run linting before committing:

```bash
npm run lint
```

## IDE Configuration

Configure your editor to highlight indentation and matching brackets:

- **VS Code**: Enable bracket pair colorization and indentation guides
- **WebStorm/IntelliJ**: Enable Rainbow Brackets plugin
- **Vim/Neovim**: Use plugins like rainbow parentheses

## Pre-commit Hooks

Our pre-commit hooks will prevent committing code with structural errors. If your commit is rejected, run:

```bash
npm run lint:fix
```

## For Review

When reviewing code changes, pay special attention to:
- Element nesting 
- Indentation consistency
- Proper hierarchy of UI elements
- Closing tags and brackets

Following these guidelines will help prevent the React JSX structuring errors we've encountered.