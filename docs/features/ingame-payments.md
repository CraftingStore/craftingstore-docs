#In-game payments

On our Spigot/Bukkit plugin, we support "In-game payments". This allows the buyer to pay with in-game money (using Vault) instead of real money. This can be used to be EULA compliant.

### Requirements
- Spigot/Bukkit (Sponge is not supported)
- Vault
- Any Vault compatible eco plugin (e.g. EssentialsX)
- CraftingStore plugin 2.8 or higher

### How do I enable virtual currency?
- Go to the package where you want to enable it for [ Webstore > Packages ].
- Open the "In-game" tab.
- Select the server(s)s where you want this package to be buyable.
- Enter the price that should be paid (it will not use the normal price).
- Go to the "Gateways" tab for your package, and enable "Virtual Currency"

### package requirements/settings
- The player cannot buy if they are banned from the store (either IP or name)
- The player cannot buy if they do not have the required packages
- The player cannot buy if they reached the user or global level

### Changing messages
- You can change all inventory options at our dashboard [ Settings -> Plugin Menu ]
- You can change all "Error" messages (that may be server-specific) in the config.yml of the CraftingStore plugin
> not-enough-balance-message: "&4You do not have enough in-game money in your account! You can also buy this package on the website:"
