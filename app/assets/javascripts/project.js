// need to attach listener to 'new' btn, if clicked, removed default 'is-hiddnen' from the project popover and if user clicks cancel, hide popover again

// turbolinks must be loaded before we get the party started
document.addEventListener('turbolinks:load', function () {
    // Assign the elements being called to variables
    const openProjectButton = document.getElementById('new-project-button')
    const projectPopover = document.getElementById('new-project-popover')

    // Check to see if what we're listening for actually exists
      if (openProjectButton && projectPopover) {
        // add event listening to new project button
          openProjectButton.addEventListener('click', function () {
            // get rid of the 'is-hiddne' class if it is there
            return projectPopover.classList.contains('is-hidden') ? projectPopover.classList.remove('is-hidden') : null
          }, false)

    // Give cancel button an event listener
    const cancelProjectPopover = document.getElementById('cancel-project-popover')
    cancelProjectPopover.addEventListener('click', function () {
      // hide the pop over once more
      return projectPopover.classList.add('is-hidden')
  }, false)
}
})
