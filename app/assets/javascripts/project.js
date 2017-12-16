import 'bootstrap';
// turbolinks must be loaded before we get the party started
document.addEventListener('turbolinks:load', function () {
  if (document.getElementById('new-project-form')) {
    // Assign the elements being called to variables
    var openProjectButton = document.getElementById('new-project-button')
    var projectPopover = document.getElementById('new-project-popover')
    var projectForm = document.getElementById('new-project-form')
    var projectName = document.getElementById('project-name-input')

    // Before adding listeners, check to see if elements exist
      if (openProjectButton && projectPopover) {
        // add event listening to new project button
          openProjectButton.addEventListener('click', function () {
            // get rid of the 'is-hidden' class if it is there
            return projectPopover.classList.contains('is-hidden') ? projectPopover.classList.remove('is-hidden') : null
          }, false)

    // Give cancel button an event listener
    var cancelProjectPopover = document.getElementById('cancel-project-popover')
    cancelProjectPopover.addEventListener('click', function () {
      // hide the pop over once more
      return projectPopover.classList.add('is-hidden')
  }, false)
}
// for handling errors from the project form submission
project.Form.addEventListener('ajax:error', function (xhr, status, err) {
  console.log xhr

  // supply erro class to the project name input
  projectName.classList.add('is-invalid')

  // creates the error helper
  var errorNode = document.createElement('div')
  var errorTextNode = document.createTextNode('Every Project needs a NAME!')
  errorNode.classList.add('not valid feedback!')
  errorNode.appendChild(errorTextNode)
  // add error message node
  projectName.parentNode.insertBefore(errorNode, projectName.nextSibling)
  })
  }
})
