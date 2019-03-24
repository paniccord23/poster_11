var morpfing = anime({
  targets: '.polymorpf',
  points: [
    { value: '85,1 124,10 152,107 74,54' },
    { value: '85,1 124,10 152,107 90,116' },
    { value: '85,1 152,12 152,107 90,116' },
    { value: '85,1 152,12 189,94 90,116' },
    { value: '85,1 152,12 152,107 90,116' },
    { value: '85,1 124,10 152,107 90,116' },
    { value: '85,1 124,10 152,107 74,54' }

  ],
  easing: 'easeOutQuad',
  duration: 3500,
  loop: true
})

$(function() {
    $(".move").each(function () {
      let width  = 50
      let height = 50
      let x      = 620
      let y      = 500
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })

      // ограничить блок по размру потому что буквы скачут по всем
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) +50
        let x      = Math.floor(Math.random() * 800) +20
        let y      = Math.floor(Math.random() * 300) - 20
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 420
      let y      = 2000
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = 250 + Math.floor(Math.random() * 10)
        let height = Math.floor(Math.random() * 100) +50
        let x      = Math.floor(Math.random() * 800) + 20
        let y      = 2000 + Math.floor(Math.random() * 10)
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter1-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 670
      let y      = 2200
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 100) + 50
        let y      = 2000 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter2-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 420
      let y      = 2350
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 100) + 50
        let y      = 2000 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter3-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 750
      let y      = 2420
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 100) + 50
        let y      = 2000 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter4-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 580
      let y      = 2670
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 100) + 50
        let y      = 2000 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter5-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 520
      let y      = 3100
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 100) + 50
        let y      = 2000 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
$(function() {
    $(".letter6-move").each(function () {
      let width  = 150
      let height = 150
      let x      = 780
      let y      = 2860
      $(this).css({
        "top": y + "px",
        "left": x + "px",
        "width":  width + "px",
        "height": height + "px",
      })
      $(this).on("mouseenter", function() {
        let width  = Math.floor(Math.random() * 100) + 50
        let height = Math.floor(Math.random() * 100) + 50
        let x      = Math.floor(Math.random() * 100) + 50
        let y      = 2000 + 100
        $(this).css({
          "top": y + "px",
          "left": x + "px",
          "width":  width + "px",
          "height": height + "px",
        })
    })
  })
})
