*This repository is a mirror of the [component](http://component.io) module [bloodhound/intercom](http://github.com/bloodhound/intercom). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bloodhound-intercom`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# intercom.io component

intercom.io library wrapped as a component.

## Installation

```sh
component install bloodhound/intercom
```

## Example

```javascript
var intercom = require('intercom');

intercom.initialize({
  app_id: '83f8354335ec366b43950c626e86dcccfc338fbf'
});

intercom.update({
  email: 'john.doe@example.com',
  name: 'John Doe',
  created_at: 1234567890
});
```
