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
