$(function() {
  let a = getRandomArbitrary(20, 150)
  let b = getRandomArbitrary(70, 400)
  let c = getRandomArbitrary(140, 700)
  let d = getRandomArbitrary(1, 60)
  let e = getRandomArbitrary(310, 900)
  let f = getRandomArbitrary(400, 900)
  let g = getRandomArbitrary(160, 400)
  let h = getRandomArbitrary(600, 990)
  let i = getRandomArbitrary(1, 150)
  let j = getRandomArbitrary(300, 900)
  let k = getRandomArbitrary(20, 150)
  let l = getRandomArbitrary(70, 600)

  let points = a + "," + b + "," + c + "," + d + "," + e + "," + f + "," + g + "," + h + "," + i + "," + j + "," + k + "," + l


  $("#poly").attr("points", points)
})
