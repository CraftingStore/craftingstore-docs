#Counter-Strike

For CS:GO we use RCON, most Source games, like CS:GO have support for this.

### How to use RCON?
RCON listens on a port, and we can connect to it, and send commands to your server.

1. Create the following file if it does not exist: `/csgo/cfg/server.cfg`.
2. Open that file, and add the following (if it's not there already)
```
rcon_password "replace with strong random password"
```
3. You can also add `+rcon_password` as a startup parameter instead, so the password is not in a configuration file. This is the recommended way.
4. Restart your server.
5. Go to our dashboard [ Webstore -> Servers ] and add a server with the RCON type.
6. Enter the external IPv4 (e.g. 10.10.10.10), port, and the configured password.

Assuming that your ports are open, and everything is configured right, it will now allow us to send commands.
