/**
 * intercom.io component
 */

var intercom = module.exports;

/**
 * Initialize intercom library with given `settings`
 *
 * @param {Object} settings
 * @api public
 */

intercom.initialize = function(settings) {
  if (!window.Intercom) {
    require('load-script')(
      '//static.intercomcdn.com/intercom.v1.js',
      function() {
        window.Intercom('boot', settings);
      }
    );
  }
  else {
    throw new Error("Intercom has already been initialized.");
  }
};

/**
 * Update intercom settings. Merges given `settings` with existing settings.
 *
 * @param {Object} settings
 * @api public
 */

intercom.update = function(settings) {
  if (window.Intercom) {
    window.Intercom('update', settings);
  }
};
