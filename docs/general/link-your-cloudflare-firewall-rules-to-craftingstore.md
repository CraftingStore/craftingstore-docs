#Link your Cloudflare firewall rules to CraftingStore

When you use Cloudflare for your domain, and you receive an attack, traffic may leak to us (we see rates above 10.000 requests per second). This causes our load balancers to reject all traffic to your website, because you are above our threshold.

We can automatically manage some firewall rules for your store domain. We will not touch anything else, and only need access to "Firewall Services" and "WAF". So no account access, DNS access, etc.

We will create one custom rule and update it when required, and configure IP based rate limiting. Please do not modify it manually, that will cause issues. We can do things like; Enabling "Under attack mode" for specific countries, or create specific rules to stop common attacks. These will only affect the store, never any of your other websites.

> **Note**: Make sure that your Cloudflare domain is active, your key won't be valid if it still "Pending". So make sure you complete that before following this article.

1\. Go to your Cloudflare account, and open the API section: 

2\. Go to the create token page[![FMNn9oJz9U.png](/img/general/link-your-cloudflare-firewall-rules-to-craftingstore/4p26hr6sks.png)](/img/general/link-your-cloudflare-firewall-rules-to-craftingstore/ev23pqlkpy.png)

3\. Create a custom token by clicking "Get Started".  
[![sTGY0r4idD.png](/img/general/link-your-cloudflare-firewall-rules-to-craftingstore/swhtf7rtvd.png)](/img/general/link-your-cloudflare-firewall-rules-to-craftingstore/jkce6ewcit.png)

4\. Create the following specifications:  
**&gt; Token name**: Give it any name you like, we recommend you name it something like "CraftingStore".  
**&gt; Permissions:**   
\- First box: Zone  
\- Second box: Firewall Services  
\- Third box: Edit  

**Add a second entry**

\- First box: Zone  
\- Second box: Zone WAF  
\- Third box: Edit  

**&gt; Zone Resources:**  
\- First box: Include  
\- Second box: Specific zone  
\- Third box: Your domain  
**&gt; Client IP address Filtering: Leave as-is**  
**&gt; TTL: Leave as-is**

5\. Click "Continue to summary"  
6\. Click "Create token"  
7\. Take the token, and copy it into the page at \[ Settings -&gt; Domain \] and hit the save button  
8\. Done!
