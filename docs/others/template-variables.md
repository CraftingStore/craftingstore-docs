#Template variables

This document lists the variables that you can use when editing templates, they are grouped by page as not all pages have access to the same variables. You can also use default variables from Twig.

## Generic pages (home, terms, custom)

### {{ language }}
Name: Language
Type: object
Info: This object contains all language strings as configured at our dashboard.

### {{ store }}
Name: Store
Type: object
Info: This object contains all information about the store, some properties that you can access include;
- id
- domain
- name
- brandingEnabled
- logo_url
- currency

### {{ categories }}
Name: Categories
Type: array of objects
Info: The categories for the store, some properties that you can access include;
- id
- enabled
- order
- name
- description
- children (child category)

### {{ pages }}
Name: Pages
Type: array of objects
Info: The pages for the store, some properties that you can access include;
- id
- name
- slug
- showInNavbar

### {{ modules }}
Name: Modules
Type: array of objects
Info: The modules (for the sidebar) as configured at our dashboard, some properties that you can access include;
- id
- header
- type
- order
- data

### {{ error }}
Name: Error
Type: string
Info: Error message (e.g. when someone does not have the right permission to access a package).

### {{ page_name }}
Name: Page Name
Type: string
Info: The name of the page that you are viewing

### {{ player }}
Name: Player
Type: object
Info: The player that is logged in to the store, some properties that you can access include;
- name
- uuid
- steamAvatar

--

## Category Page

### {{ language }}
Name: Language
Type: object
Info: This object contains all language strings as configured at our dashboard.

### {{ store }}
Name: Store
Type: object
Info: This object contains all information about the store, some properties that you can access include;
- id
- domain
- name
- brandingEnabled
- logo_url
- currency

### {{ categories }}
Name: Categories
Type: array of objects
Info: The categories for the store, some properties that you can access include;
- id
- enabled
- order
- name
- description
- children (child category)

### {{ pages }}
Name: Pages
Type: array of objects
Info: The pages for the store, some properties that you can access include;
- id
- name
- slug
- showInNavbar

### {{ packages }}
Name: Packages
Type: array of objects
Info: The packages for this category, some properties that you can access include;
- id
- enabled
- order
- name
- description
- children (child category)

### {{ modules }}
Name: Modules
Type: array of objects
Info: The modules (for the sidebar) as configured at our dashboard, some properties that you can access include;
- id
- name
- price
- pictureUrl
- description

### {{ error }}
Name: Error
Type: string
Info: Error message (e.g. when someone does not have the right permission to access a package).

### {{ page_name }}
Name: Page Name
Type: string
Info: The name of the page that you are viewing

### {{ player }}
Name: Player
Type: object
Info: The player that is logged in to the store, some properties that you can access include;
- name
- uuid
- steamAvatar

--

## Package Page

### {{ language }}
Name: Language
Type: object
Info: This object contains all language strings as configured at our dashboard.

### {{ store }}
Name: Store
Type: object
Info: This object contains all information about the store, some properties that you can access include;
- id
- domain
- name
- brandingEnabled
- logo_url
- currency

### {{ categories }}
Name: Categories
Type: array of objects
Info: The categories for the store, some properties that you can access include;
- id
- enabled
- order
- name
- description
- children (child category)

### {{ pages }}
Name: Pages
Type: array of objects
Info: The pages for the store, some properties that you can access include;
- id
- name
- slug
- showInNavbar

### {{ package }}
Name: Package
Type: This specific package
Info: The package that you are viewing, some properties that you can access include;
- id
- enabled
- order
- name
- description
- children (child category)

### {{ modules }}
Name: Modules
Type: array of objects
Info: The modules (for the sidebar) as configured at our dashboard, some properties that you can access include;
- id
- name
- price
- pictureUrl
- description

### {{ error }}
Name: Error
Type: string
Info: Error message (e.g. when someone does not have the right permission to access a package).

### {{ page_name }}
Name: Page Name
Type: string
Info: The name of the page that you are viewing

### {{ player }}
Name: Player
Type: object
Info: The player that is logged in to the store, some properties that you can access include;
- name
- uuid
- steamAvatar

### {{ isSubscription }}
Name: Subscription
Type: bool
Info: If the package is a subscription

### {{ userSelectableServers }}
Name: User selectable servers
Type: array
Info: Servers that the user can choose to execute this package on.

## Login Page

### {{ language }}
Name: Language
Type: object
Info: This object contains all language strings as configured at our dashboard.

### {{ store }}
Name: Store
Type: object
Info: This object contains all information about the store, some properties that you can access include;
- id
- domain
- name
- brandingEnabled
- logo_url
- currency

--

### {{ categories }}
Name: Categories
Type: array of objects
Info: The categories for the store, some properties that you can access include;
- id
- enabled
- order
- name
- description
- children (child category)

### {{ pages }}
Name: Pages
Type: array of objects
Info: The pages for the store, some properties that you can access include;
- id
- name
- slug
- showInNavbar

### {{ authenticationMethod }}
Name: Authentication Method
Type: string
Info: The game type

### {{ modules }}
Name: Modules
Type: array of objects
Info: The modules (for the sidebar) as configured at our dashboard, some properties that you can access include;
- id
- name
- price
- pictureUrl
- description

### {{ error }}
Name: Error
Type: string
Info: Error message (e.g. when someone does not have the right permission to access a package).

### {{ page_name }}
Name: Page Name
Type: string
Info: The name of the page that you are viewing

### {{ player }}
Name: Player
Type: object
Info: The player that is logged in to the store, some properties that you can access include;
- name
- uuid
- steamAvatar

