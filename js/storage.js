const STORAGE_KEY = "physio_user_id";

export function getUserId() {
  let id = localStorage.getItem(STORAGE_KEY);

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(STORAGE_KEY, id);
  }

  return id;
}

export function resetUserId() {
  const id = crypto.randomUUID();
  localStorage.setItem(STORAGE_KEY, id);
  return id;
}
