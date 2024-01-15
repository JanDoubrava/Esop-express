-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 10, 2024 at 06:02 PM
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
-- Database: `projektwp`
--

-- --------------------------------------------------------

--
-- Table structure for table `produkty`
--

DROP TABLE IF EXISTS `produkty`;
CREATE TABLE IF NOT EXISTS `produkty` (
  `ID` int NOT NULL,
  `nazev` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_czech_ci NOT NULL,
  `cena` text CHARACTER SET utf8mb4 COLLATE utf8mb4_czech_ci NOT NULL,
  `obrazek` text CHARACTER SET utf8mb4 COLLATE utf8mb4_czech_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_czech_ci;

--
-- Dumping data for table `produkty`
--

INSERT INTO `produkty` (`ID`, `nazev`, `cena`, `obrazek`) VALUES
(1, 'Hamburger', '4.99', './picture/hamburger.png'),
(2, 'Pizza', '8.50', './picture/pizza.png'),
(3, 'Spaghetti Bolognese', '9.75', './picture/spagety.png'),
(4, 'Caesar Salát', '6.99', './picture/salatkure.png'),
(5, 'Grilovaná Kuřecí Křídla', '12.50', './picture/grillkridla.png'),
(6, 'Losos s Brokolicí', '15.99', './picture/losos.png'),
(7, 'Vegetariánská Lasagne', '10.25', './picture/lasagne.png'),
(8, 'Sushi Sada', '18.50', './picture/sushi.png'),
(9, 'Taco', '7.75', './picture/taco.png'),
(10, 'Pho', '11.25', './picture/pho.png'),
(11, 'Kuřecí Kari s Rýží', '13.99', './picture/kari.png'),
(12, 'Ryba a hranolky', '14.50', './picture/rybahranolky.png'),
(13, 'Caprese Sendvič', '6.25', './picture/capresesendvic.png'),
(14, 'Hovězí Steak', '20.99', './picture/steak.png'),
(15, 'Salát s Kuřecím Masem', '8.75', './picture/salatkure.png'),
(16, 'Krevety na Grillu', '16.50', './picture/krevety.png'),
(17, 'Ratatouille', '9.25', './picture/ratatouille.png'),
(18, 'Veganský Burger', '11.75', './picture/veggieburger.png'),
(19, 'Paela', '17.50', './picture/paela.png'),
(20, 'Kuřecí Tacos', '7.99', './picture/tacos.png'),
(21, 'Lobster Roll', '22.75', './picture/humr.png'),
(22, 'César Sendvič', '8.50', './picture/caesarsendvic.png'),
(23, 'Jarní Rolky', '10.99', './picture/rolky.png'),
(24, 'Quinoa Salát', '12.50', './picture/quinoa.png'),
(25, 'Makaronový Salát s Tuniakem', '14.25', './picture/makaronystunakem.png'),
(26, 'Tatarský Biftek', '19.50', './picture/tatarak.jpg'),
(27, 'Kuřecí Fajitas', '11.75', './picture/fajitas.png'),
(28, 'Růžový Kuřecí Kari', '13.99', './picture/ruzovykari.png'),
(29, 'Miso Polévka', '5.25', './picture/polivka.png'),
(30, 'Ravioli s Ricottou a Špenátem', '16.50', './picture/ravioli.png'),
(31, 'Kořeněné Drůbeží Křídla', '8.75', './picture/kridla.png'),
(32, 'Salát s Ovocem a Mandlemi', '9.50', './picture/ovocnysalat.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
