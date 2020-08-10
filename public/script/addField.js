document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
    const newFields = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFields.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFields)

}