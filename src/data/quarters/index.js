import quarters23_24 from './2023-2024.json';
import quarters24_25 from './2024-2025.json';
import quarters25 from './2025.json';

export default [
  { select: { title: 'Version 1', subtitle: '2023-2024 (Old)' }, name: '2023-2024', value: quarters23_24 },
  { select: { title: 'Version 2', subtitle: '2024-2025 (Old)' }, name: '2024-2025', value: quarters24_25 },
  { select: { title: 'Version 3', subtitle: '2025 (Current)' }, name: '2025', value: quarters25, isNewest: true },
];
