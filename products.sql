
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nazev` varchar(255) DEFAULT NULL,
  `Cena` int DEFAULT NULL,
  `Obrazek` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`ID`, `Nazev`, `Cena`,`Obrazek`) VALUES
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