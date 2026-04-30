export async function getPromoMock() {
  // имитация задержки сети
  await new Promise((r) => setTimeout(r, 100));

  const now = new Date();
 
  // акция до конца дня
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  return {
    endAt: endOfDay.toISOString(),
    serverTime: now.toISOString(),
  };
}
