/**
 * Mock implementation of the promo API.
 * Replace with a real endpoint that returns { endAt, serverTime } from the server
 * so the countdown is synchronized across clients.
 */
export async function getPromoMock() {
  // Simulate network latency.
  await new Promise((r) => setTimeout(r, 100));

  const now = new Date();

  // Promo runs until the end of the current day.
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  return {
    endAt: endOfDay.toISOString(),
    serverTime: now.toISOString(),
  };
}
