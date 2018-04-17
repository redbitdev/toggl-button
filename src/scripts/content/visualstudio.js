/*jslint indent: 2, plusplus: true */
/*global $: false, document: false, togglbutton: false, createTag:false, window: false, MutationObserver: false */
'use strict';

// Individual Work Item & Backlog page
togglbutton.render('.witform-layout-content-container:not(.toggl)', {observe: true}, function () {
  var link,
    description = `#${$('.work-item-form-id span').innerText} - ${$('.work-item-form-title input').value}`,
    project = '', // our projects don't align with toggle and VS so just leave this blank
    container = $('.work-item-form-header-controls-container');

  link = togglbutton.createTimerLink({
    className: 'visual-studio-online',
    description: description,
    projectName: project
  });

  container.appendChild(link);
});
