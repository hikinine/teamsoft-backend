
function timeoutPromise(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

;(async () => {

  console.log("1")
  await timeoutPromise(1000)
  console.log("2")
  await timeoutPromise(1000)
  console.log("3")
  await timeoutPromise(1000)
  console.log("4")
  await timeoutPromise(1000)
  console.log("5")

})();