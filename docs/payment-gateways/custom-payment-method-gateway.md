#Custom payment method (gateway)

##### What is it?

Our custom payment method allows you to create your own implementation. We redirect the customer to a URL that you give back, and we mark the payment as "paid" when you tell use to. This allows you to implement local payment methods that we do not support (or can support). This does require technical (programming) knowledge.

##### How does it work?

The process is as follows (we'll explain more about it later in this article);  
1\) We'll do a JSON POST request to an endpoint that you provide to us.   
2\) We fetch the "data-&gt;url" string from this endpoint, and redirect the customer to this URL.   
3\) The customer completes their payment, or any logic that you want, you can redirect them to a service like PayPal, or something custom, its up to you.  
4\) When your system has confirmed that the payment has been completed, you'll have to notify our API endpoint with the transaction ID, status, and signature.   
5\) We mark the payment as "paid" and handle the commands, just like we would do with any other payment method.

##### Integration

**Checking the authenticity of the request**

We'll add a "X-Signature" header to all of our calls to your endpoint. You can calculate a hmac (sha256) from the raw input content (the JSON post body) and your secret key. The key you calculate, must match the one we provide in the header.

```
// PHP Example
hash_hmac('sha256', $rawRequestContent, 'secretKey');
```

If you do not receive a valid signature (it does not exist, or is not valid), you'll need to respond with the following JSON body and return a "400 - bad request" status code.

```
{
  "success": false
}
```

**Requesting the URL (CraftingStore -&gt; Your endpoint):**  
When the customer clicks your payment method, we will do a POST request on your endpoint with information about the payment. The information includes:

```
{
  "type": "PENDING", // Status enum: PAID, PENDING, CHARGE-BACK
  "transactionId": "DUMMY-DUMMY-DUMMY-DUMMY", // Transaction ID
  "currency": "USD", // Currency
  "user": {
    "identifier": "1234567", // Internal identifier (basket ID)
    "email": "dummy@craftingstore.net", // Client email
    "firstName": "Dummy", // nullable
    "lastName": "Doe", // nullable
    "billingAddressLineOne": "Examplestreet 3", // nullable
    "billingAddressLineTwo": "", // nullable
    "billingCity": "ExampleTown", // nullable
    "billingZipCode": "1111AA", // nullable
    "billingCountry": { // nullable
      "name": "Netherlands",
      "code": "NL",
      "currency": "EUR"
    },
  },
  "package": {
    "name": "Example package", // Combined package name
    "notes": null, // Optional notes, not used on CraftingStore currently
    "price": 900 // Money amount in cents
  },
  "webhook": {
    "failedUrl": "https://example.craftingstore.net/failed", // URL to redirect the user to on failure (payment cancel/error)
    "successUrl": "https://example.craftingstore.net/success" // URL to redirect the user to on success
  }
}
```
Note: Billing information is only available when you have this enabled at [ Settings -> Webshop ]. 

We expect the following JSON output:

```
{
  "success": true,
  "data": {
    "url": "https://api.example.com/payment/init.php"
  }
}
```

This is the point where you redirect the client to whatever you want, any payment method that you've created your integrations for.

##### Confirming the payment

When the payment has been completed, and validated you'll have to notify us, so we can start processing the commands for your payment. We will only do something when we are notified about it.

You can do a JSON POST request to the following endpoint: ***https://api.craftingstore.net/callback/custom***

We expect the following body:

```
{
    "type": "paid",
    "transactionId": "DUMMY-DUMMY-DUMMY"
}
```

And a "**X-Signature**" header, with the raw JSON content as its content, and your secret key as the key, just like you use to verify our calls.
Note: Make sure that you remove any spaces and enters before calculating the hash, the above example will become: `{"type": "paid","transactionId": "DUMMY-DUMMY-DUMMY"}`. If you do not remove those, it will reject your signature.

##### Payment retention time

We will store payments for up to 7 days at the "Pending" state. Make sure to either confirm the payment before that time, or we will mark it as "invalid" and it won't run. This will happen to payments where the user stopped the process.

##### Graphical representation of the flow

[![AnuVL4CfvQ.png](/img/payment-gateways/custom-payment-method-gateway/f5tute2zfp.png)](/img/payment-gateways/custom-payment-method-gateway/hyngw0kz4m.png)
