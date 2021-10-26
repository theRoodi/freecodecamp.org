//Use the Rest Parameter with Function Parameters

const sum = (...args) => {
    const argss = [...args];
    return argss.reduce((a, b) => a + b, 0);
  }