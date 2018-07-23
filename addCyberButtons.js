var presetStyles = {
  'kith.com': 'btn btn--small cyberAIO-kith'
}

$(document).ready(function () {
  $('[name="add"]').each(function (i, button) {
    let customStyles = presetStyles[window.location.hostname] || ''

    let quickTaskButton = $(button).after(`<a class="${customStyles}  button cyberAIO" href="javascript:void(0)">Buy with Cyber</a>`)
    console.log(i)
    $('.cyberAIO').click(function() {
      let currentVariant = $('[name="id"]').eq(i).val()

      window.open(`cyberaio:https://${window.location.hostname}/cart/${currentVariant}:1`, '_blank');
    })
  })
})