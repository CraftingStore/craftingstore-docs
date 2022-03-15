#Cannot create a basket

Your store might say "Something went wrong while creating your shopping basket" there can be a few reasons for why this is happening.

### What does this mean?
It means that our API rejected the creation of your shopping basket. This can be an issue with our API, or the API has blocked your request (this is more likely).

### How can I get blocked?
We have protection against common attacks to stores. The error might come up if you created many baskets without paying them (that might have happened during testing). If you add a package to the basket, click a payment gateway, checkout and never pay and repeat that process a few times, we will reject any further basket creations from your IP as a normal user would not do that.

### Are other players affected?
If you are blocked, only your IP is affected. Any other buyer can still create baskets. If the issue is caused by our API having an issue, then nobody will be able to create baskets. 

### Why does the message not just say that I'm blocked?
We want to give attackers as little information as possible, only abusers (or testers) will ever encounter this in a live store due to being blocked.