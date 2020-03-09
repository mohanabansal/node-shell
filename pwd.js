const prompt = process.stdout.write("prompt > ")

const output = process.stdin.on("data", (data)=> {
  let result = '';
  if(data.toString().trim() === "pwd") {
    result = process.cwd();
  }

  process.stdout.write(result)

})

module.exports = {
  prompt,
  output
}
