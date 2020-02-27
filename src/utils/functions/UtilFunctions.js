/*
check for is array
 */
export const isArray = x => {
  return x.constructor.toString().indexOf('Array') > -1;
};
