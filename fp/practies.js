const fx = require("./fx");
/**
 * login logic
 */
const login = (function(val) {
  const log = fx.log;
  log(val);
  return {
    input: input => input,
    check: fx.curry((f, iter) => fx.filter(f, iter)),
    res: res => (res.length === 0 ? "login fail" : "login success")
  };
})(10);
console.log(login);
// fx.go(fx.gn(10), login.input, login.check(a => a > 1), login.res, fx.log);
