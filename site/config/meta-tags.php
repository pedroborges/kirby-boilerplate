<?php

/*
 * Meta Tag plugin config
 */

c::set('meta-tags.order', ['link', 'title', 'meta', 'og', 'twitter']);

c::set('meta-tags.default', function(Page $page, Site $site) {
    $title = $page->isHomePage()
                ? $site->title()
                : $page->title();
    $description = $page->isHomePage()
                ? $site->description()
                : $page->description();

    return [
        'title' => $title,
        'meta' => [
            'description' => $description
        ],
        'link' => [
            'dns-prefetch' => [
                ['href' => 'https://fonts.googleapis.com'],
                ['href' => 'https://fonts.gstatic.com'],
            ],
            'canonical' => $page->url(),
            'icon' => [
                ['href' => url('assets/images/icons/favicon-16.png'), 'sizes' => '16x16', 'type' =>'image/png'],
                ['href' => url('assets/images/icons/favicon-32.png'), 'sizes' => '32x32', 'type' =>'image/png'],
                ['href' => url('assets/images/icons/favicon-96.png'), 'sizes' => '96x96', 'type' =>'image/png']
            ],
            'apple-touch-icon' => [
                ['href' => url('assets/images/icons/apple-touch-icon-152.png'), 'sizes' => '152x152', 'type' =>'image/png'],
                ['href' => url('assets/images/icons/apple-touch-icon-167.png'), 'sizes' => '167x167', 'type' =>'image/png'],
                ['href' => url('assets/images/icons/apple-touch-icon-180.png'), 'sizes' => '180x180', 'type' =>'image/png'],
            ],
            'stylesheet' => [
                ['href' => asset('assets/css/main.css')]
            ],
        ],
        'og' => [
            'site_name' => $site->title(),
            'url' => $page->url(),
            'type' => 'website',
            'title' => $title,
            'description' => $description,
            'image' => url('assets/images/cover.png'),
        ],
        'twitter' => [
            'site' => '',
            'card' => 'summary_large_image',
            'title' => $title,
            'description' => $description,
            'image' => url('assets/images/cover.png'),
        ]
    ];
});

// c::set('meta-tags.templates', function (Page $page, Site $site) {
//     return [];
// });
