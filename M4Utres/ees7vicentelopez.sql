-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-03-2025 a las 19:11:03
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ees7vicentelopez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comision_evaluadora`
--

DROP TABLE IF EXISTS `comision_evaluadora`;
CREATE TABLE IF NOT EXISTS `comision_evaluadora` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `materia` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `year` char(2) NOT NULL,
  `division` char(2) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time(6) NOT NULL,
  `profesor` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `comision_evaluadora`
--

INSERT INTO `comision_evaluadora` (`id`, `materia`, `year`, `division`, `fecha`, `hora`, `profesor`) VALUES
(1, 'PRACTICAS DEL LENGUAJE', '1°', '3°', '2025-02-19', '09:00:00.000000', 'GUZMAN MAXIMILIANO'),
(3, 'PRACTICAS DEL LENGUAJE', '2°', '3°', '2025-02-19', '09:00:00.000000', 'CALANDRINO SANTIAGO'),
(4, 'EDUCACION ARTISTICA', '2°', '3°', '2025-02-17', '08:00:00.000000', 'MURRAY VERONICA'),
(5, 'SIC', '4°', '1°', '2025-02-21', '10:00:00.000000', 'PEREZ MAYER VERONICA'),
(6, 'MATEMATICA', '6°', '2°', '2025-02-18', '10:30:00.000000', 'ARMAN ROXANA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

DROP TABLE IF EXISTS `estudiantes`;
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `Cuil` int NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `fecha_nac` date NOT NULL,
  `DNI_madre` int NOT NULL,
  `apellido_madre` varchar(30) NOT NULL,
  `nombre_madre` varchar(30) NOT NULL,
  `DNI_padre` int NOT NULL,
  `apellido_padre` varchar(30) NOT NULL,
  `nombre_padre` varchar(30) NOT NULL,
  `DNI_tutor` int NOT NULL,
  `apellido_tutor` varchar(30) NOT NULL,
  `nombre_tutor` varchar(30) NOT NULL,
  `pedido_pase` tinyint(1) NOT NULL,
  `egresado` tinyint(1) NOT NULL,
  `libro` int NOT NULL,
  `folio` int NOT NULL,
  PRIMARY KEY (`Cuil`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
