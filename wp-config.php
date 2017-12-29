<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sattrack');

/** MySQL database username */
define('DB_USER', 'ruankenedi');

/** MySQL database password */
define('DB_PASSWORD', 'ruankenedi0');

/** MySQL hostname */
define('DB_HOST', 'mysql785.umbler.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         's&]yGtS}PkgjIr2dQ<GbZAm@I~AoJ4]5kA7^*oLS$W1foKu`?=l>y5t37Bb( v7n');
define('SECURE_AUTH_KEY',  'Vzu_4_Ab?!8,f2iJQSbn|}Knqjawz!cdX3^v-Z1%Rm()Tt![-#y;-8}t&Dno9SUQ');
define('LOGGED_IN_KEY',    'Z`*I6Zuk90IXbq]Lz*DOCzPR !g$3N;GX16$Ep4;vz~<6{Z/L881TIz)=]ULP9=6');
define('NONCE_KEY',        'a*)XVAtk~Yw3wt$Ub#3W#R+=RyZ#pLP!XGR}$g,w&[U[;%;{+9JL s{%%L=PqE&U');
define('AUTH_SALT',        'rO5T=],>rTEs_2qH`U#@t_bqMeq)*Zo<6VqbAw$$B1[R4x&q,68*W5>TbS:}OA5h');
define('SECURE_AUTH_SALT', 'Z0z{HJn89ryNW1X]zCT>`~GsG~$/mO)3Jvnj>]dG/RWuzxB+4uV#,/&&]6{+7|nr');
define('LOGGED_IN_SALT',   '6SQsd+LjnO2MeC(C8C#v|6}UpU{O)%b|9+kVXQd5&1?v5;],DR3%E!O<xR@cRAIr');
define('NONCE_SALT',       ');,l4FK5]GB&nhrA`Q5,p;xwhM^R>mhd9g&|lXHTt8k#D0|/]I<2Chx/%=q7:.42');

#define('FTP_USER', 'root' );
#define('FTP_PASS', 'root' );
#define('FTP_HOST', 'localhost:21' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
