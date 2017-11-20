<?php

/*
 * XML Sitemap plugin config
 */

// License URL for the website images
c::set('sitemap.images.license', null);

// Enable/disable adding images to XML Sitemap
c::set('sitemap.include.images', true);

// Add/remove invisible pages
c::set('sitemap.include.invisible', false);

// URI of pages to remove
c::set('sitemap.ignored.pages', [
    site()->errorPage()
]);

// Templates names to remove
c::set('sitemap.ignored.templates', []);

// Show/hide change frequency attribute
c::set('sitemap.frequency', true);

// Show/hide priority attribute
c::set('sitemap.priority', true);

// c::set('sitemap.process', function($pages) {
//     return $pages->filter(function($page) {
//         return true;
//     });
// });
