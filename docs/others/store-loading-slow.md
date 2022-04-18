#Store Loading Slow

We sometimes get tickets about stores loading slow, these are a few reasons that might be the cause of that.

### Check if your template is not the cause.
We have seen templates that cause stores to get stuck loading for 30+ seconds due to the templates using external files on expired domains. Set your store back to the default template. If that solves the issue, you know that the template is the cause. To see what file is causing the issue, you can enable the template once again, and go to your store. Click F12 (or inspect element) open the "Network" tab and refresh. Now check if you see any items that are stuck on "Pending". The one that is stuck is the one causing the issue.

Note: We have gotten multiple reports that different templates from one vendor are having this issue, we added some measures against this, so switching to the default template and back to your custom one might solve it, as we will remove some of the scripts that lock your store on update.

### You are very far from Europe
Our servers are located in Europe, if you live in Australia for example, then that might be a reason for your store to not load as quickly as it can. This is simply caused by the distance that any request has to travel over the world.

### Generic issue
Please check "status.craftingstore.net". We will update it when we have a global issue that is affecting our platform's stability.
