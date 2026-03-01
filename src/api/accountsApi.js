export const fetchAccounts = async () => {
  const response = await fetch('https://srest.com/accounts.json');
  if (!response.ok) {
    throw new Error('Failed to fetch accounts');
  }
  return response.json();
};
