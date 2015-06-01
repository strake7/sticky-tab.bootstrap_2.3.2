# sticky-tab.bootstrap_2.3.2
Extension to the Bootstrap 2.3 tab component to handle tab state persistence

Tabs using data-toggle=”sticky-tab” will have their state stored on toggle. The active state of a sticky-tab control is prioritized in the order of location.hash > localstorage (under the key location.pathName + “.sticky-tab”).

## Usage
```html
<ul class="nav nav-tabs" id="tabs">
    <li><a href="#general" data-toggle="sticky-tab">General</a></li>
    <li class=""><a href="#users" data-toggle="sticky-tab">Accounts</a></li>
</ul>
<div class="tab-content"><
  <div id="general">General</div>
  <div id="users">Users</div>
/div>
```

## Limitations
Only one tab group per page
This same extension is likely usable in 3.0 + but has not been tested
