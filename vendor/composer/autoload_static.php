<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite241428e92511602971d4e42bd51a0dd
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite241428e92511602971d4e42bd51a0dd::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite241428e92511602971d4e42bd51a0dd::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}