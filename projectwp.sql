-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 04, 2024 at 09:13 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projectwp`
--

-- --------------------------------------------------------

--
-- Table structure for table `objednavky`
--

DROP TABLE IF EXISTS `objednavky`;
CREATE TABLE IF NOT EXISTS `objednavky` (
  `Jméno` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `ID` int NOT NULL,
  `Nazev` varchar(255) NOT NULL,
  `Cena` int NOT NULL,
  `Obrazek` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nazev` varchar(255) DEFAULT NULL,
  `Cena` int DEFAULT NULL,
  `Obrazek` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ID`, `Nazev`, `Cena`, `Obrazek`) VALUES
(1, 'Jablko', 16, './obrazek/Jablko.png'),
(2, 'Broskev', 20, './obrazek/Broskev.png'),
(3, 'Banán', 12, './obrazek/Banán.png'),
(4, 'Hruška', 19, './obrazek/Hruška.png'),
(5, 'Meloun', 31, './obrazek/Meloun.png'),
(6, 'Okurka', 10, './obrazek/Okurka.png'),
(7, 'Rajče', 15, './obrazek/Rajče.png'),
(8, 'Paprika', 22, './obrazek/Paprika.png'),
(9, 'Celer', 17, './obrazek/Celer.png'),
(10, 'Mrkev', 12, './obrazek/Mrkev.png'),
(11, 'Brambory', 11, './obrazek/Brambory.png'),
(12, 'Cibule', 13, './obrazek/Cibule.png'),
(13, 'Česnek', 15, './obrazek/Česnek.png'),
(14, 'Ředkvička', 13, './obrazek/Ředkvička.png'),
(15, 'Salát', 14, './obrazek/Salát.png'),
(16, 'Kapusta', 18, './obrazek/Kapusta.png'),
(17, 'Brokolice', 21, './obrazek/Brokolice.png'),
(18, 'Květák', 20, './obrazek/Květák.png'),
(19, 'Fazole', 19, './obrazek/Fazole.png'),
(20, 'Hrášek', 15, './obrazek/Hrášek.png'),
(21, 'Kukuřice', 13, './obrazek/Kukuřice.png'),
(22, 'Dýně', 21, './obrazek/Dýně.png'),
(23, 'Řepa', 13, './obrazek/Řepa.png'),
(24, 'Cuketa', 15, './obrazek/Cuketa.png'),
(25, 'Pórek', 17, './obrazek/Pórek.png'),
(26, 'Jahoda', 25, './obrazek/Jahoda.png'),
(27, 'Malina', 24, './obrazek/Malina.png'),
(28, 'Borůvka', 25, './obrazek/Borůvka.png'),
(29, 'Třešeň', 21, './obrazek/Třešeň.png'),
(30, 'Švestka', 18, './obrazek/Švestka.png'),
(31, 'Kiwi', 28, './obrazek/Kiwi.png'),
(32, 'Ananas', 31, './obrazek/Ananas.png'),
(33, 'Mango', 32, './obrazek/Mango.png'),
(34, 'Pomeranč', 22, './obrazek/Pomeranč.png'),
(35, 'Citron', 19, './obrazek/Citron.png'),
(36, 'Limetka', 18, './obrazek/Limetka.png'),
(37, 'Grep', 30, './obrazek/Grep.png'),
(38, 'Mandarinka', 27, './obrazek/Mandarinka.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(1, 'Jenda', '$2b$08$orpu6CLTPy5lpxiIaWdnk.LeRseXJJPdM347Jfz.SZtOAtZo8Svp2'),
(2, 'JendaAdmin', '$2b$08$rFAodhbT/SxmDDti39MNbOq2jSlbTBFUkFEg5rU7Gy18p5/fu.Uu6');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
