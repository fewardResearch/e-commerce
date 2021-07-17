// React
import React from 'react';

// Component
import Button from 'components/Atoms/Button';

// Test
import { render } from '@testing-library/react';

test("header renders with correct text", () => {
    render(<Button type="button">test</Button>);
});