<?php

$kirby = kirby();

kirby()->roots()->index = __DIR__;
kirby()->urls()->index = url::base();

kirby()->roots()->assets = kirby()->roots()->index() . DS . 'public';
kirby()->urls()->assets = kirby()->urls()->index();

