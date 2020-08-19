<?php
/**
 * Copyright © Smartex Canada All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types = 1);

namespace Smartex\SwatchesCount\ViewModel\Product\Renderer;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Store\Model\ScopeInterface;

/**
 * Class Configurable
 */
class Configurable extends \Magento\Swatches\ViewModel\Product\Renderer\Configurable
{
    /**
     * Config path if show swatches as count
     */
    private const XML_PATH_SHOW_COUNT = 'catalog/frontend/show_swatch_count';

    /**
     * @var ScopeConfigInterface
     */
    protected $scopeConfig;

    /**
     * Configurable constructor.
     *
     * @param ScopeConfigInterface $scopeConfig
     */
    public function __construct(ScopeConfigInterface $scopeConfig)
    {
        $this->scopeConfig = $scopeConfig;
        parent::__construct($scopeConfig);
    }

    /**
     * Get config if swatch tooltips should be rendered.
     *
     * @return string
     */
    public function getShowSwatchCount()
    {
        return $this->scopeConfig->getValue(
            self::XML_PATH_SHOW_COUNT,
            ScopeInterface::SCOPE_STORE
        );
    }
}
