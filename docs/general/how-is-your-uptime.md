#How is your uptime/reliability

We understand that reliability and uptime are very important for any online business, especially in the online gaming world. We designed our infrastructure to be as reliable and stable as possible.

### What is your uptime?
Our uptime is pretty high in general, different parts of our stack are hosted at different places and rely on different things. We do around 7 HTTP checks to all of our endpoints every minute (From HetrixTools, and a few others), these are the results for some of our endpoints as seen from this uptime monitoring service:

#### api.craftingstore.net: 
Our API is the endpoint to which the plugins and custom integrations connect. The webshop servers also use this endpoint (internally, not the public-facing one)

Uptime in the year 2021: 100%

#### Shops: On the .craftingstore.net domain
These are the shops that run on our domain (e.g. example.craftingstore.net). 

Uptime in the year 2021: 99.999% (avg 26 sec downtime per month)

#### Shops: Behind Cloudflare
We have special load balancers for stores behind Cloudflare that use a custom domain. You will automatically use these servers when you are on Cloudflare.

Uptime in the year 2021: 99.999% (avg 26 sec downtime per month)

#### Shops: External domain
These are stores hosted plainly on our load balancers, we handle TLS termination and such on those.

Uptime in the year 2021: 99.997% (avg 1 min, 18 sec downtime per month)

#### CraftingStore CDN
We use the CDN to store assets, like package icons and such.

Uptime in the year 2021: 100%

### How do you keep your service online?
We are a bit obsessed with staying online, our set-up is not reliant on one specific server. Let's break it down.

#### Database Servers
We have a global database cluster, all nodes in this cluster can receive reads & writes. We run a bunch of these nodes in different parts of Europe (where our servers are located). They are located in different countries (Germany, The Netherlands, and France). We can lose either of these servers without any issues. As long as there is a majority, everything will run smoothly without any downtime. We can even lose an entire data center without breaking a sweat!

#### Web servers (API & Dashboard)
Our API and dashboard are both interfaces for you to interact with our platform. Using the dashboard, you can configure your store, do payments, create coupons, and more. Our dashboard and API are both fully geo-redundant. We run a few copies of both of them in different data centers, located in different countries, close to one of the database nodes.

#### Shop Servers
Our shop servers (that actually host your store) are fully separate, they have their own local database and their own local in-memory cache to make your store load quickly and more resilient to attacks. It also means that issues affecting our API will not take down your store right away (doing payments will fail, as that requires the API, but the store is at least browsable).

We run a few of these store backends, once again, in different data centers, within different countries. 

#### Edge Servers
These are the servers that are in front of your store, we have a bunch of these. We selected the data center locations based on their reliability, uptime, and DDoS Protection.

These servers are responsible for doing TLS offloading, HTTP L7 attack filtering, and L4 volume/network attack filtering. They will validate all incoming requests and feed any attack data into our global DDoS protection system that will decide if your store needs to be moved behind advanced DDoS Protection systems. They are not reliant on any other servers in our stack and choose to what backend they send the request on their own. 

#### CDN servers
We use a few services for hosting our assets, in the start of 2022 we moved over to Bunny.net using their Edge Storage, they store the data in Europe and in the USA, and put their CDN in front of it. Our own system is still working in the background to take over (automatically) if Bunny would have issues 

We store every file a few times ourselves, we use two S3 providers, both of those providers offer 99.999999999% data durability, as they store the data on a bunch of servers instead of one. And we use Bunny as described, they store it at least twice as well. 

#### Miscellaneous services
We also have other services, like renewing and requesting certificates for stores, these are also geo-redundant. We expect that some servers can be down for hours for any reason. So we designed these supporting services to deal with that. Certificate uploads to our edge servers will happen when they are ready for it.

### How do you monitor your services?
We use a few different monitors to check if our services are online, all of our systems are self-healing, from our database cluster to our automatic failover system (even our failover system is geo-redundant). But when that all fails we are on-call 24/7, and yes, that is also redundant. We rely on PagerDuty for waking staff up at night, but if that does not work (because mobile data is down or the phone that is being called is dead), on-call staff will be alerted by a flashing light that is hooked up to a device waiting for downtime notifications from another service.

### Why all this redundancy?
Downtime is annoying, we've seen huge impacts when major networks had issues. Cloudflare has had a few outages over the years, as did Fastly, AWS, and other major networks. Outages will happen at some point. A great example of why having data stored at different providers would be OVH's data-center fire. They lost an entire building overnight. If we'd have our servers at a data center that went up in flames or lost power for days, getting our specific servers online would be a very low priority for them, they would have to deal with a lot of people asking for a solution, including very important clients like goverments in some cases. We want our system to take care of that without noticeable downtime, or where we have the ability to restore service ourselves within a reasonable amount of time. Pointing to AWS and saying: Sorry, they're down, nothing we can do, is just not our style. We do not want to lose data, we do not want to be offline due to issues at one location, we want to be ready. And we are.
