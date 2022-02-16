-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2022 at 10:52 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crs`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_accounts`
--

CREATE TABLE `t_accounts` (
  `id` int(10) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_accounts`
--

INSERT INTO `t_accounts` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', '', 'e086cf6476352a6de512faa7ad41c1db');

-- --------------------------------------------------------

--
-- Table structure for table `t_cars`
--

CREATE TABLE `t_cars` (
  `id` int(10) NOT NULL,
  `cars` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `agent` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `datetime` datetime(6) DEFAULT NULL,
  `datetimeUse` datetime(6) DEFAULT NULL,
  `datetimeReturn` datetime(6) DEFAULT NULL,
  `purpose` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_cars`
--

INSERT INTO `t_cars` (`id`, `cars`, `name`, `code`, `agent`, `tel`, `datetime`, `datetimeUse`, `datetimeReturn`, `purpose`) VALUES
(1, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 09:00:00.000000', '2022-02-11 11:00:00.000000', '-'),
(3, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 13:00:00.000000', '2022-02-11 15:00:00.000000', '-'),
(4, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 15:00:00.000000', '2022-02-11 18:00:00.000000', '-');

-- --------------------------------------------------------

--
-- Table structure for table `t_cars_logger`
--

CREATE TABLE `t_cars_logger` (
  `id` int(10) NOT NULL,
  `cars` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(100) NOT NULL,
  `agent` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `datetime` datetime(6) DEFAULT NULL,
  `datetimeUse` datetime(6) DEFAULT NULL,
  `datetimeReturn` datetime(6) DEFAULT NULL,
  `purpose` varchar(100) NOT NULL,
  `action` varchar(100) NOT NULL,
  `parking` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_cars_logger`
--

INSERT INTO `t_cars_logger` (`id`, `cars`, `name`, `code`, `agent`, `tel`, `datetime`, `datetimeUse`, `datetimeReturn`, `purpose`, `action`, `parking`) VALUES
(1, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 09:00:00.000000', '2022-02-11 11:00:00.000000', '-', 'booking', '-'),
(2, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 09:00:00.000000', '2022-02-11 11:00:00.000000', '-', 'booking', '-'),
(3, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 09:00:00.000000', '2022-02-11 11:00:00.000000', '-', 'booking', '-'),
(4, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 11:00:00.000000', '2022-02-11 13:00:00.000000', '-', 'booking', '-'),
(5, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 13:00:00.000000', '2022-02-11 15:00:00.000000', '-', 'booking', '-'),
(6, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 15:00:00.000000', '2022-02-11 18:00:00.000000', '-', 'booking', '-'),
(7, '1169', 'Rachata Rongluan', '1096408442', 'SCAN', '0123456789', '2022-02-10 08:00:00.000000', '2022-02-11 11:00:00.000000', '2022-02-11 15:00:00.000000', '-', 'cancel', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_accounts`
--
ALTER TABLE `t_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_cars`
--
ALTER TABLE `t_cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_cars_logger`
--
ALTER TABLE `t_cars_logger`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t_accounts`
--
ALTER TABLE `t_accounts`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `t_cars`
--
ALTER TABLE `t_cars`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_cars_logger`
--
ALTER TABLE `t_cars_logger`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
