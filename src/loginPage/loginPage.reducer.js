const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) =>
{
  const payload = action.payload;

  switch (action.type)
  {
  default:
    return state;
  }
};