module.exports = function tool() {
  console.log('⏳ CLI tool: working ...')
  debugger;
  console.log('another one');
  setTimeout(function() {
    console.log('✅ CLI tool: done!')
  }, 1000);
}