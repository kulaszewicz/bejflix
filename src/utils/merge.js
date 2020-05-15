export const merge = (a, b) => ({
  ...b,
  ...Object.keys(a).reduce((out, k) => {
    if (!b[k]) {
      out[k] = a[k];
    } else if (
      a[k] &&
      a[k] instanceof Object &&
      b[k] instanceof Object &&
      !(a[k] instanceof Array) &&
      !(b[k] instanceof Array)
    ) {
      out[k] = merge(a[k], b[k]);
    }
    return out;
  }, {}),
});
