export const resetData = {
  clickCount: 0,
  level: 1,
  nextLevel: 10,
  clickAchievement: 100,
  autoClickAmount: 0,
  autoClickPrice: 10,
};

export const ResetData = resetValues => {
  localStorage.setItem('data', JSON.stringify(resetData));
  resetValues;
};
