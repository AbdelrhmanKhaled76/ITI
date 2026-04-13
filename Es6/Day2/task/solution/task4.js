const myProject = {
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = 0;

    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index];
          const value = this[key];
          index++;
          return {
            value: { key, value }, 
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};