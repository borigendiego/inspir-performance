export const getHomeContent = (store) => {
  return store && store.sportPerformance ? store.sportPerformance : ''
};