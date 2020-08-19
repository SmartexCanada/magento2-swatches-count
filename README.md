# Magento 2 Swatches Count
Magento 2 extension to display swatch count instead of thumbnails in products list

## Installation
To install this extension, use the following command:

    composer require smartex/magento2-inventory-sync

Afterwards, enable this module, run the setup scripts and flush the cache:

    ./bin/magento module:enable Smartex_SwatchesCount
    ./bin/magento setup:upgrade
    ./bin/magento cache:flush

## Configuration
To show the swatch count on the products list, simply change the following config values.

 `Stores > Configuration > Catalog > Catalog > Storefront`
 
 * `Show Swatches in Product List`: Yes
 * `Show Swatch as Count (Product List)`: Yes