# Loading Screen Usage Examples

This document provides common patterns for integrating the loading screen into your components.

## Pattern 1: Data Fetching

Show loading screen while fetching data from an API:

```typescript
import { useLoading } from '@/shared/contexts';
import { useEffect, useState } from 'react';

export function MyDataComponent() {
  const { startLoading, stopLoading } = useLoading();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      startLoading();
      try {
        const response = await fetch('/api/data');
        setData(await response.json());
      } finally {
        stopLoading();
      }
    };

    fetchData();
  }, [startLoading, stopLoading]);

  return <div>{data && <pre>{JSON.stringify(data)}</pre>}</div>;
}
```

## Pattern 2: Button Actions

Show loading screen during async operations triggered by button clicks:

```typescript
import { useLoading } from '@/shared/contexts';

export function MyActionButton() {
  const { startLoading, stopLoading } = useLoading();

  const handleAction = async () => {
    startLoading();
    try {
      // Do something async
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Action completed');
    } finally {
      stopLoading();
    }
  };

  return <button onClick={handleAction}>Click Me</button>;
}
```

## Pattern 3: Conditional Loading

Toggle loading state based on conditions:

```typescript
import { useLoading } from '@/shared/contexts';

export function MyConditionalComponent() {
  const { startLoading, stopLoading, isLoading } = useLoading();

  const toggleLoading = () => {
    if (isLoading) {
      stopLoading();
    } else {
      startLoading();
    }
  };

  return (
    <button onClick={toggleLoading}>
      {isLoading ? 'Hide Loading' : 'Show Loading'}
    </button>
  );
}
```

## Pattern 4: Form Submission

Show loading screen while submitting a form:

```typescript
import { useLoading } from '@/shared/contexts';
import { FormEvent } from 'react';

export function MyForm() {
  const { startLoading, stopLoading } = useLoading();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Submission failed');
      console.log('Form submitted successfully');
    } catch (error) {
      console.error(error);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Pattern 5: File Upload

Show loading screen during file upload:

```typescript
import { useLoading } from '@/shared/contexts';

export function FileUploader() {
  const { startLoading, stopLoading } = useLoading();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    startLoading();

    try {
      const formData = new FormData();
      formData.append('file', files[0]);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      console.log('File uploaded successfully');
    } finally {
      stopLoading();
    }
  };

  return (
    <input type="file" onChange={handleFileUpload} />
  );
}
```

## Pattern 6: Multiple Async Operations

Show loading screen while waiting for multiple async operations:

```typescript
import { useLoading } from '@/shared/contexts';

export function MultiOperationComponent() {
  const { startLoading, stopLoading } = useLoading();

  const handleMultipleOperations = async () => {
    startLoading();

    try {
      const [data1, data2, data3] = await Promise.all([
        fetch('/api/endpoint1').then(r => r.json()),
        fetch('/api/endpoint2').then(r => r.json()),
        fetch('/api/endpoint3').then(r => r.json()),
      ]);

      console.log('All operations completed', { data1, data2, data3 });
    } finally {
      stopLoading();
    }
  };

  return <button onClick={handleMultipleOperations}>Process Data</button>;
}
```

## Pattern 7: Delete Confirmation

Show loading screen while confirming and deleting:

```typescript
import { useLoading } from '@/shared/contexts';

export function DeleteButton({ id }: { id: string }) {
  const { startLoading, stopLoading } = useLoading();

  const handleDelete = async () => {
    if (!confirm('Are you sure?')) return;

    startLoading();

    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Delete failed');
      console.log('Item deleted');
    } finally {
      stopLoading();
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}
```

## Pattern 8: Long Running Operation with Progress

For longer operations, consider showing the loading screen with estimated time:

```typescript
import { useLoading } from '@/shared/contexts';
import { useState } from 'react';

export function LongOperation() {
  const { startLoading, stopLoading } = useLoading();
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleLongOperation = async () => {
    startLoading();
    setEstimatedTime('Processing... This may take a while');

    try {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate long operation
      console.log('Long operation completed');
    } finally {
      stopLoading();
      setEstimatedTime('');
    }
  };

  return (
    <div>
      <button onClick={handleLongOperation}>Start Long Operation</button>
      {estimatedTime && <p>{estimatedTime}</p>}
    </div>
  );
}
```

## Best Practices

### ✅ Do's

- Always use `finally` block to ensure `stopLoading()` is called
- Use `startLoading()` at the beginning of async operations
- Check `isLoading` state to disable buttons during loading
- Combine with error handling for robustness
- Use for both user-triggered and automatic operations

### ❌ Don'ts

- Don't forget to call `stopLoading()` after operations
- Don't nest multiple loading calls without proper cleanup
- Don't use for very short operations (< 200ms)
- Don't leave loading state hanging if an error occurs

## Error Handling Pattern

```typescript
import { useLoading } from '@/shared/contexts';

export function RobustOperation() {
  const { startLoading, stopLoading } = useLoading();

  const handleOperation = async () => {
    startLoading();

    try {
      const response = await fetch('/api/data');
      if (!response.ok) throw new Error('API error');

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Operation failed:', error);
      // Handle error appropriately
    } finally {
      stopLoading(); // Always called, regardless of success or failure
    }
  };

  return <button onClick={handleOperation}>Execute</button>;
}
```

For more information, see [LOADING_SCREEN.md](LOADING_SCREEN.md)
