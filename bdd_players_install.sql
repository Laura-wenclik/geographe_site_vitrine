-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 28, 2020 at 06:56 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geographe_players`
--

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rang` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `rang`, `pseudo`, `score`) VALUES
(1, 'porte_mire', 'Mimi', 123),
(2, 'porte_mire', 'bebert', 1234),
(3, 'porte_mire', 'trotro', 153143),
(4, 'porte_mire', 'chouette', 1),
(5, 'grand_commandeur', 'jvm_master', 1534151511),
(6, 'porte_mire', 'mcrn_dmssn', 0),
(7, 'porte_mire', 'debilos_du_77', 153115),
(8, 'porte_mire', 'azerty_random', 153813),
(9, 'porte_mire', 'botton_THE_botton', 76153153),
(10, 'porte_mire', 'mandi_mando', 6163142),
(11, 'porte_mire', 'serge_X', 762631),
(12, 'porte_mire', 'backstab4ever', 84370814),
(13, 'porte_mire', 'noobslayer', 332535611),
(14, 'porte_mire', 'geralt_of_rivia', 563458421),
(15, 'porte_mire', 'kych_loren', 205988163),
(16, 'porte_mire', 'jacques_chirac', 6757),
(17, 'porte_mire', 'paul_leto_muaddib', 854450),
(18, 'porte_mire', 'pere_castor', 212400),
(19, 'porte_mire', 'epicbro', 344525),
(20, 'porte_mire', 'franz_ze_german', 676223846),
(21, 'porte_mire', 'lambert_conique_conforme', 7200000),
(22, 'porte_mire', 'martin_gambier', 99528423),
(23, 'porte_mire', 'tintin_le_congolais', 453381390),
(24, 'porte_mire', 'mama_aiuto', 944515659),
(25, 'porte_mire', 'madeleine_du_93', 859684033),
(26, 'porte_mire', 'le_mexicain', 1968),
(27, 'porte_mire', 'tom_bombadil', 1154141),
(28, 'porte_mire', 'lulu_la_demente', 3256321),
(29, 'porte_mire', 'jea_michel_satan', 666666),
(30, 'porte_mire', 'dark_sasuke', 461896154);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
