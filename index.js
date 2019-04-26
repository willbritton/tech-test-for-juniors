const { sendEmail } = require('./emailer');
const { scores, emails } = require('./data');

const notifyOfExamResults = () => emails.reduce((a, { name: l, email: h }) => ((b) => (sendEmail(h, (b > 50 ? ((c, d) => `Congratulations ${c}, you passed your exams with ${d}%!`) : ((e, f) => `Bad luck ${e}, you failed your exams with ${f}%.`))(((g) => `${g.charAt(0).toUpperCase()}${g.slice(1)}`)(l), b))) ? a : [...a, h])(((i, j) => i.filter(({ name: m }) => m === j).reduce((k, { score: n },_, { length: o }) => k + n / o, 0))(scores, l)), []);

module.exports = notifyOfExamResults;
