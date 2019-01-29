module.exports.hello = function(text = 'World') {
  if (text.includes('W')) {
    console.log('includes');
  }
  return 'Hello ' + text;
};
