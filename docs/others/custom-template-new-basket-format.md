# Custom Template: New basket format

Af of 22/09/2020 we made some required modifications to the template, make sure you modify your template to reflect these changes, or the sub-total showed will not be valid in some cases.

Full basket.html file: 

Changes: 

##### What is this changed?

We have added support for changing the quantity when a gift-card or coupon is active in the basket. And we added a new option to the package editor, you can now disable the quantity box for specific packages. It was unfortunately not possible to make this backward compatible. The issue that occurs when you have not yet updated the basket.html file is only visual, the user will still pay the correct price. And the total amount shown on the right bottom is still 100% correct.

##### What do I need to change?

The main thing that we've changed is between the for loop, if your template does not have any special style in here, you can simply remove everything in your basket.twig file that between the "**{% for basketItem in basketItems %}**" and the "**{% endfor %}**"

 ```
```
{% for basketItem in basketItems %}

	{{ basketItem.name }}
	{{ basketItem.price|number_format(2, '.', ',') }} {{ store.currency }}
	
		{% if disableQuantity %}
		1
		{% else %}
		
			
				
					
					
					{{ language.update }}
					
				
			
		
		{% endif %}
	
	
		{% if basketItem.subTotal == basketItem.originalSubTotal %}
			{{ basketItem.originalSubTotal|number_format(2, '.', ',') }}
		{% else %}
			{{ basketItem.originalSubTotal|number_format(2, '.', ',') }}
			{{ basketItem.subTotal|number_format(2, '.', ',') }}
		{% endif %}
		
		{{ store.currency }}
	
	
		{{ language.remove }}
	

{% endfor %}
```
```