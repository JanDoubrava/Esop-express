
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Nazev` varchar(255) DEFAULT NULL,
  `Cena` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`ID`, `Nazev`, `Cena`,`Obrazek`) VALUES
(1, 'Jablko', 16),
(2, 'Broskev', 20),
(3, 'Banán', 12),
(4, 'Hruška', 19),
(5, 'Meloun', 31),
(6, 'Okurka', 10),
(7, 'Rajče', 15),
(8, 'Paprika', 22),
(9, 'Celer', 17),
(10, 'Mrkev', 12),
(11, 'Brambory', 11),
(12, 'Cibule', 13),
(13, 'Česnek', 15),
(14, 'Ředkvička', 13),
(15, 'Salát', 14),
(16, 'Kapusta', 18),
(17, 'Brokolice', 21),
(18, 'Květák', 20),
(19, 'Fazole', 19),
(20, 'Hrášek', 15),
(21, 'Kukuřice', 13),
(22, 'Dýně', 21),
(23, 'Řepa', 13),
(24, 'Cuketa', 15),
(25, 'Pórek', 17),
(26, 'Jahoda', 25),
(27, 'Malina', 24),
(28, 'Borůvka', 25),
(29, 'Třešeň', 21),
(30, 'Švestka', 18),
(31, 'Kiwi', 28),
(32, 'Ananas', 31),
(33, 'Mango', 32),
(34, 'Pomeranč', 22),
(35, 'Citron', 19),
(36, 'Limetka', 18),
(37, 'Grep', 30),
(38, 'Mandarinka', 27),
COMMIT;