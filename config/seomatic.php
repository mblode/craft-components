<?php

return [
    '*' => [
        'pluginName' => 'SEO',
        'renderEnabled' => true,
        'sitemapsEnabled' => true,
        'headersEnabled' => true,
        'environment' => 'live',
        'displayPreviewSidebar' => false,
        'displayAnalysisSidebar' => false,
        'devModeTitlePrefix' => '',
        'cpTitlePrefix' => '',
        'devModeCpTitlePrefix' => '',
        'separatorChar' => '|',
        'maxTitleLength' => 70,
        'maxDescriptionLength' => 155,
        'siteGroupsSeparate' => true,
        'addHrefLang' => true,
        'generatorEnabled' => false,
    ],
    'local' => [
        'environment' => 'local',
    ],
    'staging' => [
        'environment' => 'staging',
    ],
    'production' => [
        'environment' => 'live',
    ],
];