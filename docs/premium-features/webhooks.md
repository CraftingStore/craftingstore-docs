#Webhooks

We offer the ability to send webhooks to your endpoints using JSON on the Gold plan. You can use this to give roles on forums, send notifications on various platforms that we do not support directly (e.g. Slack) or to do things like sending invoices.

### What placeholders can I use?
*{in_game_name}* = The user's In-game name  
*{gateway}* = The gateway used  
*{uuid}* = The user's UUID  
*{payment_name}* = The combined name of what the user bought    
*{coupon}* = The coupon used    
*{player_ip}* = The user's IP   
*{price}* = The amount paid 
*{referred_by}* = The user that was entered as the referral 
*{email}* = The user's email    
*{timestamp}* = The unix timestamp of the payment   
*{transaction_id}* = The CraftingStore transaction ID   
*{external_transaction_id}* = The payment gateway transaction ID    
*{first_name}* = The user's first name  
*{last_name}* = The user's last name    
*{address_line_one}* = The user's address line  
*{address_line_two}* = The user's address line  
*{address_city}* = The user's city  
*{address_state}* = The user's state    
*{address_zip}* = The user's zip code    
*{address_country_name}* = The user's country name  

### Checking if the request is coming from us
We'll add a "X-Signature" header to all of our calls to your endpoint. You can calculate a hmac (sha256) from the raw input content (the JSON post body) and your secret key. The key you calculate, must match the one we provide in the header. If the hmac does not match, then you should reject the request and assume that it is not coming from us. Not doing this might leave your application open to attack.

```
// PHP Example
hash_hmac('sha256', $rawRequestContent, 'secretKey');
```

### What should I enter at the payload section?
The payload section expects JSON, you can ask a developer about this - Pretty much any web developer should be familiar with it or should be able to understand it in a short amount of time. You can use the placeholders within your payload. We did this because if you use software that expects a specific format, like Slack, then you can change it to that format and make it work.

This is a quick example of a random format to get an impression. 
```json
{
  "player": {
    "name": "{in_game_name}"
  },
  "payment": {
    "gateway": "{gateway}",
    "price": "{price}",
    "coupon": "{coupon}"
  }
}
```

We expect the file in minified form:

```json
{"player":{"name":"{in_game_name}"},"payment":{"gateway":"{gateway}","price":"{price}","coupon":"{coupon}"}}
```

There are various websites (like: https://jsoneditoronline.org/) that allow you to edit JSON in realtime. They show realtime errors, and allow you to change your JSON into a one-liner or return it back into a better readable format with a click. There are lots of tools online that can help you write the payload.

### My webhook does not execute
Webhooks only run for real payments (including free ones through the store) but not manual ones created on our dashboard.