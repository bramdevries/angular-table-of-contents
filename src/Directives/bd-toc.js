/*global angular */

angular.module('angular-toc')
.directive('bdToc', [function () {

    // Item object.
    var Item = function (el) {
        return {

            // The element we want to make an item.
            $el: angular.element(el),

            // Make a slug out of the text
            slug: function (text) {
                return text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
            },

            // Renders the item.
            render: function () {

                // Get the title.
                var title = this.$el.text();

                // Set the id of the element.
                this.$el.attr('id', this.slug(title));

                // Prepare the markup
                var el = '<li>' +
                            '<a href="#/' + this.slug(title) + '">' + title + '</a>' +
                        '</li>';

                // Return the finished element.
                return el;
            }
        };
    };

    return {
        // Can only be created as an element: <bd-toc></bd-toc>
        restrict: 'E',
        link: function (scope, el, attrs) {
            // Set the selector that will be used, default to .toc-item
            var selector = attrs.selector || '.toc-item';

            // Get the elements based on the selector
            var els = angular.element(selector);

            // Generate the approriate HTML to start.
            var $el = el.append('<ul class="bd-toc" />');

            // Loop over the selected elements.
            angular.forEach(els, function (el){
                // Append a list item.
                $el.append(new Item(el).render());
            });
        }
    };
}]);
