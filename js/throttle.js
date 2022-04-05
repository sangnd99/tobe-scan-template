const throttle = (fn, ms) => {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      fn(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, ms);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    shouldWait = true;
    fn(...args);
    setTimeout(timeoutFunc, ms);
  };
};

export default throttle;
