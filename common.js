module.exports = {
  async doulbeAsync(val){
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(val*2);
      },2000);
    });
  }
};