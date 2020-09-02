[![Packagist License](https://img.shields.io/packagist/l/smartex/module-swatches-count?color=blue)](https://packagist.org/packages/smartex/module-swatches-count)
[![Packagist](https://img.shields.io/packagist/v/smartex/module-swatches-count)](https://packagist.org/packages/smartex/module-swatches-count)
[![Packagist](https://img.shields.io/packagist/dt/smartex/module-swatches-count)](https://packagist.org/packages/smartex/module-swatches-count)

# Magento 2 Swatches Count
Magento 2 extension to display swatch count instead of thumbnails in products list

## System requirements
This extension supports and has been tested on the following versions of Magento:

Open Source Edition
- 2.3.4
- 2.3.5-p1
- 2.4.0

Support for Magento versions prior to 2.3.4 is not guaranteed, but should be compatible with versions 2.3.0 and up.

## Installation
To install this extension, use the following command:

    composer require smartex/module-swatches-count

Afterwards, enable this module, run the setup scripts and flush the cache:

    ./bin/magento module:enable Smartex_SwatchesCount
    ./bin/magento setup:upgrade
    ./bin/magento cache:flush

## Configuration
To show the swatch count on the products list, simply change the following config values.

 `Stores > Configuration > Catalog > Catalog > Storefront`
 
 * `Show Swatches in Product List`: Yes
 * `Show Swatch as Count (Product List)`: Yes
