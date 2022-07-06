const sum = (...args) => {
    console.log(args);
    if (!args || args.length <= 1) {
        return "pass atleast two arguements";
    }
    let ans = args.reduce((a, b) => (a + Number(b)), 0);
    if (ans % 1 !== 0) {
        return Number(ans.toFixed(5));
    }
    return ans;
}
module.exports = sum;