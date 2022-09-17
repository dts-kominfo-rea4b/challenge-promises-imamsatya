const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async ($emosi) => {
    const theaterIXXresponse = await promiseTheaterIXX($emosi);
    const theaterVGCresponse = await promiseTheaterVGC($emosi);
    let count = 0;
    theaterIXXresponse.forEach(element => {
      if (element.hasil == $emosi) count++
    });
    theaterVGCresponse.forEach(element => {
      if (element.hasil == $emosi) count++
    });
    console.log(`count : ${count}`);
    return count;
}

module.exports = {
  promiseOutput,
};
