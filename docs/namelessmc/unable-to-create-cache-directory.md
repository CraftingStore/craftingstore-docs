#The cache directory cannot be created

You might get an error that the cache folder cannot be created. This is a permission issue.

### Why does it say CraftingStore caused the error?
Our plugin uses the NamelessMC caching system, the error occurs when the permissions are not configured correctly.

### How do I resolve the issue?
It depends on your setup, the webserver & PHP users should be able to access all the NamelessMC files. Make sure that they have the right permissions.

### Can you fix this issue?
The issue is not caused by the CraftingStore module (it does seem that way in the errors, but it is not the cause it is just a mere victim)

### Why is your module in the error?
Most likely due to the name, CraftingStore starts with a C, it's almost at the start of the alphabet, so it might load before other modules, being the first to throw the error.

### Screenshot
[![1.png](/img/namelessmc/HChVcUIYv8.png)](/img/namelessmc/HChVcUIYv8.png)