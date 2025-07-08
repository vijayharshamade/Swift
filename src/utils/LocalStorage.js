const KEY = "commentsDashboardState";

export const saveState = (state) => {
  localStorage.setItem(KEY, JSON.stringify(state));
};

export const loadState = () => {
  const stored = localStorage.getItem(KEY);
  return stored ? JSON.parse(stored) : null;
};
