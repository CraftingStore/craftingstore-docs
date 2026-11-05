# How to create a package

Categories are used to store packages. They add structure to your store. You can have a category named "Kits" with only kits.

1\. Open the dashboard at CraftingStore.net ([click](https://dash.craftingstore.net/admin))  
2\. Click "Packages" in the sidebar of the panel.   
3\. Click "New package" at the right top.   
  
Now, we are on the create page. We have a lot of options. This guide will explain all of them.   
  
**Basics**  
**Name**: The display name, to be shown on your store.   
**Description**: The description to display on your store, HTML is allowed.   
**Price**: The price the customer has to pay.   
**Enabled**: Should this package be shown to the customer?  
**Category**: The category this package belongs to.   
**Global limit**: How many times this package may be bought in total, by all users combined.   
**User limit:** How many times this package may be bought by a specific customer (UUID or Minecraft name)  
**Limit type**: How long should this limit last, it will reset after this period.   
**Servers**: On what servers the commands should be executed by default.   
**Allow the user to pay what they want**: The user can select any price, as long as it's above the price defined. Handy for donations.

**Commands**  
**Types**:  
\- Initial: Will be executed on payment.  
\- Expiry: Will be executed when the payment expires.   
\- Renewal: When the user pays again for the item.   
\- Chargeback: Commands that should be executed when the user charges back. (for example: ban the user).   
Command: The command to run.  
Servers: All packages selected in the Basic tab, or a specific server.

To find out what placeholders you can use, see the following guide ([click](/general/what-placeholders-can-i-use)).  
  
**Image**  
The image to show on the page.  
  
**Requirements**  
Required packages that need to be bought before the user can buy this package.   
Only require one package: The customer only needs to buy one package instead of all of them.

**Minecraft**  
The information to show in the GUI.