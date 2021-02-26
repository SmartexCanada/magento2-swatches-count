/**
 * Copyright © Smartex Canada All rights reserved.
 * See LICENSE for license details.
 */

define([
    'jquery',
    'underscore',
    'jquery-ui-modules/widget'
], function ($, _) {
    'use strict';

    /**
     * Render swatch count.
     * Required one json:
     *  - jsonConfig (magento's option config)
     */
    $.widget('mage.SwatchCountRenderer', {
        options: {
            classes: {
                attributeClass: 'swatch-attribute',
                attributeLabelClass: 'swatch-attribute-count-label',
                attributeSelectedOptionLabelClass: 'swatch-attribute-selected-option'
            },

            // option's json config
            jsonConfig: {}
        },

        /**
         * @private
         */
        _init: function () {
            // Don't render the same set of swatches twice
            if ($(this.element).attr('data-rendered')) {
                return;
            }
            $(this.element).attr('data-rendered', true);

            if (this.options.jsonConfig !== '') {
                this._sortAttributes();
                this._RenderControls();
                $(this.element).trigger('swatch.initialized');
            } else {
                console.log('SwatchRenderer: No input data received');
            }
        },

        /**
         * This needs to be here
         *
         * @private
         */
        _create: function () {
            var self = this;
        },

        /**
         * @private
         */
        _sortAttributes: function () {
            this.options.jsonConfig.attributes = _.sortBy(this.options.jsonConfig.attributes, function (attribute) {
                return parseInt(attribute.position, 10);
            });
        },

        /**
         * Render controls
         *
         * @private
         */
        _RenderControls: function () {
            var container = this.element,
                classes = this.options.classes;

            $.each(this.options.jsonConfig.attributes, function () {
                var item = this,
                    controlLabelId = 'option-label-' + item.code + '-' + item.id,
                    label = '';

                label +=
                    '<span id="' + controlLabelId + '" class="' + classes.attributeLabelClass + '">' +
                    item.options.length + ' ' +
                    $('<i></i>').text(item.label).html() +
                    (item.options.length !== 1 ? 's' : '') +
                    '</span>';

                // Create new control
                container.append(
                    '<div class="' + classes.attributeClass + ' ' + item.code + '" ' +
                         'data-attribute-code="' + item.code + '" ' +
                         'data-attribute-id="' + item.id + '">' +
                        label +
                    '</div>'
                );
            });
        }
    });

    return $.mage.SwatchCountRenderer;
});
