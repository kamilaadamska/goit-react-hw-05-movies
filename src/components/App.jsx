import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
    </Routes>
  );
};
