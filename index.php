<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim(array(
  'templates.path' => './views'

));

$app->get('/', function() use ($app) {


  $app->render('header.php');
  $app->render('menu.php');
  $app->render('main.php');
});

$app->get('/project', function() use ($app) {
  $app->render('header.php');
  $app->render('menu.php');
  $app->render('project.php');
});



$app->get('/contact.php', function() use ($app) {
  $app->render('header.php');
  $app->render('menu.php');
  $app->render('contact.php');
});

$app->run();
