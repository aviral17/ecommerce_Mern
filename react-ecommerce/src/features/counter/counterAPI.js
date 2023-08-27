// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  // As promise accepting callback function, so giving async there and so removing the await error
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080");
    const data = await response.json();
    resolve({ data });
  });
}
