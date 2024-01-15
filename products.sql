
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
(19, 'Špenát', 16),
(20, 'Fazole', 19),
(21, 'Hrášek', 15),
(22, 'Kukuřice', 13),
(23, 'Dýně', 21),
(24, 'Artičok', 23),
(25, 'Řepa', 13),
(26, 'Cuketa', 15),
(27, 'Patison', 18),
(28, 'Mangold', 19),
(29, 'Pórek', 17),
(30, 'Chřest', 22),
(31, 'Jahoda', 25),
(32, 'Malina', 24),
(33, 'Borůvka', 25),
(34, 'Třešeň', 21),
(35, 'Švestka', 18),
(36, 'Hrozno', 27),
(37, 'Kiwi', 28),
(38, 'Ananas', 31),
(39, 'Mango', 32),
(40, 'Pomeranč', 22),
(41, 'Citron', 19),
(42, 'Limetka', 18),
(43, 'Grep', 30),
(44, 'Mandarinka', 27),
(45, 'Avokádo', 32),
(46, 'Granátové jablko', 33),
(47, 'Líči', 35),
(48, 'Kaki', 36),
(49, 'Marakuja', 38),
(50, 'Guava', 39),
(51, 'Papája', 41);
COMMIT;