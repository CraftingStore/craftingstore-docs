# My store connection is not secure

If your store tells you that the connection is "not secure", you can follow these steps to get this resolved.

We offer HTTPS on all CraftingStore sub-domains, free of charge. But if you want to use your own domain, we require you to buy our silver (premium) plan to get HTTPs.

**Free store with CraftingStore sub-domain:**  
If you have a free store with a CraftingStore sub-domain (e.g. mystore.craftingstore.net) HTTPS is included. It might be the case that the automatic HTTPs redirect is disabled, you can enable it from the "domain settings" page.

**Free store with custom sub-domain:**  
You have a few possibilities, some require an external service, a few possibilities are:  
\- Upgrade your account to unlock HTTPS on custom domains.   
\- Use CloudFlare's HTTPS - Scroll down to "free stores": [Click here](/general/set-up-ssl-certificates-for-your-store) for more info.  
\- Disable HTTPS redirect in the CraftingStore settings, and use the custom domain without HTTPs.  
\- Use a CraftingStore subdomain (e.g. mystore.craftingstore.net), they have HTTPs included free of charge.   
  
**Premium store with custom-domain:**  
We offer HTTPs within our premium plans but it is not enabled by default, you can enable it at the "HTTPs" tab within the settings page at your CraftingStore dashboard. (detailed tutorial: )

Also, make sure that HTTPS redirect is enabled, you can do that from here ([click](https://dash.craftingstore.net/admin/settings/domain)). This will force all users to use the secure version of your web-store.

If you did issue the certificate but it is not showing up there might be something wrong. Certificates are issued by Lets Encrypt on an external service, give it at least 30 minutes. We will get notified when a certificate fails to issue 3 times in a row.

If the certificate is not working after this period, please contact us through the ticket system within the dashboard and we will be able to issue the certificate manually.

**I changed my domain, my HTTPs is no longer working!**  
HTTPs (TLS/SSL) certificates are linked to (sub)domains, not to your store itself. If you change your domain, you need to re-request the certificate. You can do so by going to the "HTTPs" page and requesting a new certificate (Guide: )